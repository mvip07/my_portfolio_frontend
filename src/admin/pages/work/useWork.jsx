import { WorkItem } from "./components";
import API from "../../../assets/utils/axios"
import { showToast } from "../../../assets/utils/toatify"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useHandleAPIError } from "../../../assets/utils/handleAPIError";

export const useWork = () => {
    const handleAPIError = useHandleAPIError();

    const [state, setState] = useState({
        active: "",
        work: {},
        workId: null,
        workData: [],
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
            formData: { ...prevState.formData, [formType]: { ...prevState.formData[formType], [name]: value } },
        }));
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const res = await API.get("/get/work");
            setState(prevState => ({ ...prevState, workData: res.data || [] }));
        } catch (err) {
            handleAPIError(err);
        }
    }, []);

    const submitForm = useCallback(async (type, workId = null) => {
        const urlMap = {
            create: "/create/work",
            update: `/update/work/${workId}`,
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
        const url = `/delete/work/${id}`;
        setState(prevState => ({ ...prevState, loading: { name: "deleteWork", active: true }, }));

        try {
            const res = await API.delete(url);
            setActive("");
            await fetchData();
            showToast("success", res?.data?.message);
        } catch (err) {
            handleAPIError(err);
        } finally {
            setState(prevState => ({ ...prevState, loading: { name: "deleteWork", active: false } }));
        }
    }, [fetchData, handleAPIError]);

    const setActive = useCallback(value => {
        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const getId = useCallback(async (workId, work, value) => {
        setState(prevState => ({ ...prevState, ...{ workId: workId, work: work } }));

        setState(prevState => ({ ...prevState, active: value }));
    }, []);

    const worksList = useMemo(() => state?.workData?.map((work) => (
        <WorkItem key={work._id} getId={getId} data={work} />
    )), [state.workData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        ...state,
        worksList,
        setActive,
        submitForm,
        handleInputChange,
        submitDelete,
        submitCreateWork: () => submitForm("create"),
        submitUpdateWork: (workId) => submitForm("update", workId),
    }
}