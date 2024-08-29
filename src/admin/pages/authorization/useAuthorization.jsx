import API from "../../../assets/utils/axios"
import { showToast } from "../../../assets/utils/toatify"
import { useCallback, useEffect, useMemo, useState } from "react"
import { PermissionItem, RoleItem } from "./components"
import { useHandleAPIError } from "../../../assets/utils/handleAPIError"

export const UseAuthorization = () => {
    const handleAPIError = useHandleAPIError();

    const [state, setState] = useState({
        active: "",
        data: {
            roles: [],
            permissions: [],
        },
        dataOne: {
            role: {},
            permission: {},
        },
        formData: {
            createP: {},
            updateP: {},
            createR: {},
            updateR: {},
        },
        preview: {
            image: null,
        },
        loading: {
            name: "",
            active: false,
        },
        pagination: {
            roles: { currentPage: 1, itemsPerPage: 5 },
            permissions: { currentPage: 1, itemsPerPage: 5 },
        }
    });

    /* Helper-written functions ---- Start */

    const setLoading = (name, active) => {
        setState(prev => ({ ...prev, loading: { name, active } }));
    };

    const setActive = useCallback(value => {
        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const setData = (data) => {
        setState(prev => ({ ...prev, data }));
    };

    const getObject = (type, object) => {
        setState(prev => ({ ...prev, dataOne: { ...prev.dataOne, [type]: object } }));
    }

    /* Helper-written functions ---- The End */


    /* Functions written to take information from inputs and place them in the state ---- Start */

    const handleInputChange = useCallback((e, formType) => {
        const { name, value, multiple, options } = e.target;

        if (multiple) {
            const values = Array.from(options).filter(option => option.selected).map(option => option.value);
            setState(prevState => ({
                ...prevState,
                formData: { ...prevState.formData, [formType]: { ...prevState.formData[formType], [name]: values } },
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                formData: { ...prevState.formData, [formType]: { ...prevState.formData[formType], [name]: value } },
            }));
        }

    }, []);

    /* Functions written to take information from inputs and place them in the state ---- The End */


    /* The part where the functions for creating and obtaining data are written ---- Start */

    const fetchAllData = useCallback(async () => {
        setLoading("fetchAllData", true);
        try {
            const res = await API.get("list/users/roles/permissions");
            setData({
                roles: res.data.roles,
                permissions: res.data.permissions,
            });
        } catch (err) {
            showToast("error", err?.response?.data?.message || "Failed to fetch data");
            handleAPIError(err)
        } finally {
            setLoading("fetchAllData", false);
        }
    }, []);

    const submitData = useCallback(async (type, id) => {
        setLoading(type, true);

        const urlMap = {
            createR: "/create/role",
            updateR: `/update/role/${id}`,
            createP: `/create/permission`,
            updateP: `/update/permission/${id}`,
        };

        try {
            const method = type.includes("create") ? "post" : "put";
            const res = await API({
                method,
                url: urlMap[type],
                data: state.formData[type],
            });

            setActive("")
            showToast("success", res?.data?.message);
            setState(prevState => ({ ...prevState, formData: {} }))

            await fetchAllData();
        } catch (err) {
            handleAPIError(err);
        } finally {
            setLoading(type, false);
        }
    }, [fetchAllData, handleAPIError, state.formData]);

    const submitDelete = useCallback(async (type, id) => {
        setLoading(type, true);
        const urlMap = {
            deleteR: `role`,
            deleteP: `permission`,
        };
        const url = urlMap[type]

        API.delete(`/delete/${url}/${id}`)
            .then(res => {
                fetchAllData();
                showToast("success", res?.data?.message);
                setState(prev => ({ ...prev, active: "" }));
            })
            .catch(err => {
                showToast("error", err?.response?.data?.message || `Failed to delete ${url}`);
            })
            .finally(() => {
                setLoading(type, false);
            });
    }, [fetchAllData]);

    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]);

    /* The part where the functions for creating and obtaining data are written ---- The End */


    /* Functions written for pagination ---- Start */

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

    /* Functions written for pagination ---- The End */


    const listItems = (type, Component) => {
        const startIndex = (state.pagination[type]?.currentPage - 1) * state.pagination[type]?.itemsPerPage;
        const endIndex = startIndex + state.pagination[type]?.itemsPerPage;
        return state.data[type].slice(startIndex, endIndex).map((item, index) => (
            <Component key={item._id} getObject={getObject} setActive={setActive} data={item} index={startIndex + index + 1} />
        ));
    };

    return {
        ...state,
        ...state.dataOne,
        setActive,
        // paginations
        paginationItems,
        handlePageChange,
        handleCurrentPage,
        handleItemsPerPageChange,
        currentPageR: state.pagination["roles"].currentPage,
        currentPageP: state.pagination["permissions"].currentPage,

        handleInputChange,

        submitDelete,
        submitCreateRole: () => submitData("createR"),
        submitUpdateRole: (id) => submitData("updateR", id),

        submitCreatePermission: () => submitData("createP"),
        submitUpdatePermission: (id) => submitData("updateP", id),

        roleList: useMemo(() => listItems('roles', RoleItem), [state.data.roles, state.pagination.roles]),
        permissionList: useMemo(() => listItems('permissions', PermissionItem), [state.data.permissions, state.pagination.permissions]),
    }
}