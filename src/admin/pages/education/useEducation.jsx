import API from "../../../assets/utils/axios"
import { EducationItem } from "./components";
import { showToast } from "../../../assets/utils/toatify"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useHandleAPIError } from "../../../assets/utils/handleAPIError";

export const useEducation = () => {
    const handleAPIError = useHandleAPIError();

    const [state, setState] = useState({
        active: "",
        education: {},
        educationId: null,
        educationData: [],
        formData: {
            create: {},
            update: {},
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

    const fetchData = useCallback(async () => {
        try {
            const res = await API.get("/get/education");
            setState(prevState => ({
                ...prevState, educationData: res.data || [],
            }));
        } catch (err) {
            handleAPIError(err);
        }
    }, []);

    const submitForm = useCallback(async (type, educationId = null) => {
        const urlMap = {
            create: "/create/education",
            update: `/update/education/${educationId}`,
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

    const submitDelete = useCallback(async (id) => {
        const url = `/delete/education/${id}`;
        setState(prevState => ({
            ...prevState, loading: { name: "deleteEducation", active: true },
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
                ...prevState, loading: { name: "deleteEducation", active: false },
            }));
        }
    }, [fetchData, handleAPIError]);

    const setActive = useCallback(value => {
        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const getId = useCallback(async (educationId, education, value) => {
        setState(prevState => ({
            ...prevState, ...{ educationId: educationId, education: education }
        }));

        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const educationsList = useMemo(() => state?.educationData?.map((education) => (
        <EducationItem key={education._id} getId={getId} data={education} />
    )), [state.educationData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        ...state,
        educationsList,
        setActive,
        submitForm,
        handleInputChange,
        submitDelete,
        submitCreateEducation: () => submitForm("create"),
        submitUpdateEducation: (educationId) => submitForm("update", educationId),
    }
}