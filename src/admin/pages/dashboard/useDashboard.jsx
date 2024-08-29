import { useCallback, useMemo, useState, useEffect } from "react";
import { CountryItem } from "./components";
import API from "../../../assets/utils/axios";
import { showToast } from "../../../assets/utils/toatify";
import { useHandleAPIError } from "../../../assets/utils/handleAPIError";

export const useDashboard = () => {
    const handleAPIError = useHandleAPIError();

    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('name-asc');
    const [state, setState] = useState({
        data: {
            devices: [],
            countries: [],
            totalVisitor: {},
            yearlyMonthlyCounts: [],
        },

        pagination: {
            countries: { currentPage: 1, itemsPerPage: 5 },
        },
    })

    const setData = (data) => {
        setState(prev => ({ ...prev, data }));
    };

    const setActive = useCallback(value => {
        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const setLoading = (name, active) => {
        setState(prev => ({ ...prev, loading: { name, active } }));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (type) => {
        setSortType(type);
    };

    const getPaginationItems = (totalPages, currentPage) => {
        const pageNumbers = [];
        const maxPagesToShow = 3;
        const halfPagesToShow = Math.floor(maxPagesToShow / 2);

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= halfPagesToShow + 1) {
                for (let i = 1; i <= maxPagesToShow - 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...', totalPages);
            } else if (currentPage >= totalPages - halfPagesToShow) {
                pageNumbers.push(1, '...');
                for (let i = totalPages - (maxPagesToShow - 2); i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1, '...');
                for (let i = currentPage - halfPagesToShow; i <= currentPage + halfPagesToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...', totalPages);
            }
        }
        return pageNumbers;
    };

    const paginationItems = (type) => {
        const totalItems = state.data[type].length;
        const totalPages = Math.ceil(totalItems / state.pagination[type].itemsPerPage);
        return getPaginationItems(totalPages, state.pagination[type].currentPage);
    };

    const handlePageChange = (type, direction) => {
        setState(prev => ({
            ...prev, pagination: {
                ...prev.pagination, [type]: {
                    ...prev.pagination[type], currentPage: direction === 'next'
                        ? Math.min(prev.pagination[type].currentPage + 1, Math.ceil(state.data[type].length / prev.pagination[type].itemsPerPage))
                        : Math.max(prev.pagination[type].currentPage - 1, 1)
                }
            }
        }));
    };

    const handleItemsPerPageChange = (type, event) => {
        setState(prev => ({
            ...prev, pagination: {
                ...prev.pagination, [type]: {
                    ...prev.pagination[type], itemsPerPage: Number(event.target.value), currentPage: 1
                }
            }
        }));
    };

    const handleCurrentPage = (type, event) => {
        setState(prev => ({
            ...prev, pagination: {
                ...prev.pagination, [type]: {
                    ...prev.pagination[type], currentPage: event
                }
            }
        }));
    };

    const getDashboard = useCallback(async () => {
        setLoading("fetchAllData", true)

        try {
            const res = await API.get("/dashboard")
            setData({
                devices: res.data.deviceStats,
                countries: res.data.countryStats,
                totalVisitor: res.data.totalVisitor,
                yearlyMonthlyCounts: res.data.yearlyMonthlyCounts,
            })

        } catch (err) {
            handleAPIError(err)
        } finally {
            setLoading("fetchAllData", false)
        }
    }, [])

    const accessCountry = useCallback(async (country_name, block) => {
        API.post("/access/country", { block: block, country_name: country_name })
            .then((res) => {
                getDashboard()
                showToast("success", res?.data.message || "Successfully")
            })
            .catch((err) => {
                console.log(err)
                showToast("error", err.response?.data.message || "Something went wrong with the program")
            })
    }, [getDashboard])

    const listItems = useCallback((type, Component) => {
        let filteredCountries = state.data[type];

        if (searchTerm) {
            filteredCountries = filteredCountries.filter((c) =>
                c.country_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filteredCountries.sort((a, b) => {
            if (sortType === 'name-asc') {
                return a.country_name.localeCompare(b.country_name);
            } else if (sortType === 'name-desc') {
                return b.country_name.localeCompare(a.country_name);
            } else if (sortType === 'percentage-asc') {
                return b.percentage - a.percentage;
            } else if (sortType === 'percentage-desc') {
                return a.percentage - b.percentage;
            }
            return 0;
        });

        const startIndex = (state.pagination[type]?.currentPage - 1) * state.pagination[type]?.itemsPerPage;
        const endIndex = startIndex + state.pagination[type]?.itemsPerPage;

        return filteredCountries.slice(startIndex, endIndex).map((item, index) => (
            <Component key={index} accessCountry={accessCountry} setActive={setActive} data={item} index={startIndex + index + 1} />
        ));
    }, [searchTerm, sortType, state.pagination, state.data.countries]);

    useEffect(() => {
        getDashboard()
    }, [getDashboard])

    return {
        ...state,
        setActive,
        handleSort,
        handleSearch,
        paginationItems,
        handlePageChange,
        handleCurrentPage,
        handleItemsPerPageChange,
        currentPageC: state.pagination["countries"].currentPage,
        countriesList: useMemo(() => listItems('countries', CountryItem), [listItems, state.data.countries]),
    }
}