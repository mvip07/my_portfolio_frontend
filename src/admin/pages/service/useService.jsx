import API from "../../../assets/utils/axios";
import { showToast } from "../../../assets/utils/toatify";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useHandleAPIError } from "../../../assets/utils/handleAPIError";
import { ServiceItem } from "./components";

export const useService = () => {
    const handleAPIError = useHandleAPIError();

    const [state, setState] = useState({
        active: "",
        service: {},
        serviceItem: {},
        serviceId: null,
        serviceItemId: null,
        serviceData: [],
        formData: {
            create: {},
            update: {},
            createItem: {},
            updateItem: {},
        },
        preview: {
            icon: null,
        },
        loading: {
            name: "",
            active: false,
        },
    });

    const handleInputChange = useCallback((e, formType) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            formData: {
                ...prevState.formData, [formType]: { ...prevState.formData[formType], [name]: value },
            },
        }));
    }, []);

    const handleFileChange = useCallback((e, type) => {
        const { name, files } = e.target;
        const file = files[0];
        const fileUrl = URL.createObjectURL(file);

        setState(prevState => ({
            ...prevState,
            formData: {
                ...prevState.formData, [type]: { ...prevState.formData[type], [name]: file },
            },
            preview: { ...prevState.preview, [name]: fileUrl },
        }));
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const res = await API.get("/get/service");
            setState(prevState => ({
                ...prevState, serviceData: res.data || [],
            }));
        } catch (err) {
            handleAPIError(err);
        }
    }, []);

    const submitForm = useCallback(async (type, serviceId = null, itemId = null) => {
        const urlMap = {
            create: "/create/service",
            update: `/update/service/${serviceId}`,
            createItem: `/create/service/${serviceId}/item`,
            updateItem: `/update/service/${serviceId}/item/${itemId}`,
        };

        setState(prevState => ({ ...prevState, loading: { name: type, active: true } }));

        try {
            const method = type.includes("create") ? "post" : "put";
            const res = await API({
                method,
                url: urlMap[type],
                data: state.formData[type],
            });

            setActive("");
            showToast("success", res?.data?.message);
            setState(prevState => ({ ...prevState, formData: {} }))

            await fetchData();
        } catch (err) {
            handleAPIError(err);
        } finally {
            setState(prevState => ({ ...prevState, loading: { name: type, active: false } }));
        }
    }, [fetchData, handleAPIError, state.formData]);

    const submitDelete = useCallback(async (id, isItem = false, itemId = null) => {
        const url = isItem ? `/delete/service/${id}/item/${itemId}` : `/delete/service/${id}`;
        setState(prevState => ({
            ...prevState, loading: { name: isItem ? "deleteItem" : "deleteService", active: true },
        }));

        try {
            const res = await API.delete(url);
            setActive("");
            await fetchData();
            showToast("success", res?.data?.message);
        } catch (err) {
            handleAPIError(err);
        } finally {
            setState(prevState => ({
                ...prevState, loading: { name: isItem ? "deleteItem" : "deleteService", active: false },
            }));
        }
    }, [fetchData, handleAPIError]);

    const setActive = useCallback(value => {
        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const getId = useCallback(async (serviceId, service, itemId, item, isItem = false, value) => {
        setState(prevState => ({
            ...prevState, ...(isItem ? { serviceId: serviceId, service: service, serviceItemId: itemId, serviceItem: item } : { serviceId: serviceId, service: service })
        }));

        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const servicesList = useMemo(() => state?.serviceData?.map((service) => (
        <ServiceItem key={service._id} getId={getId} data={service} />
    )), [state.serviceData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        ...state,
        servicesList,
        setActive,
        submitForm,
        handleInputChange,
        handleFileChange,
        submitDelete,
        submitCreateService: () => submitForm("create"),
        submitUpdateService: (serviceId) => submitForm("update", serviceId),
        submitCreateServiceItem: (serviceId) => submitForm("createItem", serviceId),
        submitDeleteServiceItem: (serviceId, itemId) => submitDelete(serviceId, true, itemId),
        submitUpdateServiceItem: (serviceId, itemId) => submitForm("updateItem", serviceId, itemId),
    };
};
