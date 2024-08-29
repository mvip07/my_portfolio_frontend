import API from "../../../assets/utils/axios";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../assets/utils/toatify";
import { useState, useEffect, useCallback } from "react";
import { useHandleAPIError } from "../../../assets/utils/handleAPIError";

export const useAbout = () => {
    const handleAPIError = useHandleAPIError();

    const [state, setState] = useState({
        active: "",
        aboutData: {},
        formData: {
            create: {},
            update: {},
        },
        preview: {
            cv: null,
            image: null,
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
                ...prevState.formData,
                [formType]: { ...prevState.formData[formType], [name]: value },
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
                ...prevState.formData,
                [type]: { ...prevState.formData[type], [name]: file },
            },
            preview: { ...prevState.preview, [name]: fileUrl },
        }));
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const res = await API.get("/get/about");
            setState(prevState => ({
                ...prevState, aboutData: res.data || {},
                formData: {
                    ...prevState.formData,
                    update: {
                        cv: res.data.cv || null,
                        name: res.data.name || "",
                        image: res.data.image || null,
                        email: res.data.contact?.email || "",
                        phone: res.data.contact?.phone || "",
                        profession: res.data.profession || "",
                        description: res.data.description || "",
                    },
                },
            }));
        } catch (err) {
            handleAPIError(err);
        }
    }, []);

    const submitForm = useCallback(async (type) => {
        const urlMap = {
            create: "/create/about",
            update: "/update/about",
        };

        setState(prevState => ({
            ...prevState,
            loading: { name: `${type}About`, active: true },
        }));

        try {
            const res = await API({
                method: type === "create" ? "post" : "put",
                url: urlMap[type],
                data: state.formData[type],
            });

            setActive("")
            
            await fetchData();
            showToast("success", res?.data?.message);
        } catch (err) {
            handleAPIError(err);
        } finally {
            setState(prevState => ({
                ...prevState,
                loading: { name: `${type}About`, active: false },
            }));
        }
    }, [state.formData, fetchData]);

    const submitDelete = useCallback(async () => {
        setState(prevState => ({
            ...prevState, loading: { name: "deleteAbout", active: true },
        }));

        try {
            const res = await API.delete("/delete/about");
            setActive("")
            await fetchData();
            showToast("success", res?.data?.message);
        } catch (err) {
            handleAPIError(err);
        } finally {
            setState(prevState => ({
                ...prevState,
                loading: { name: "deleteAbout", active: false },
            }));
        }
    }, [fetchData]);

    const setActive = useCallback(async (value) => {
        setState(prevState => ({ ...prevState, active: value }))
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        ...state,
        handleInputChange,
        handleFileChange,
        submitCreatePost: () => submitForm("create"),
        submitUpdatePost: () => submitForm("update"),
        submitDelete,
        setActive
    };
};