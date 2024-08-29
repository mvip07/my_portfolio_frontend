import API from "../assets/utils/axios";
import { showToast } from "../assets/utils/toatify";
import { useCallback, useEffect, useState } from "react";

export const useHome = () => {
    const initializeState = () => {
        const storedMain = JSON.parse(localStorage.getItem("main"));
        if (storedMain) return storedMain;

        const rootStyles = getComputedStyle(document.documentElement);
        const mainColor = rootStyles.getPropertyValue('--mainCl').trim();

        const initialState = {
            darkMode: false,
            leftMenu: false,
            rightMenu: false,
            mainCl: mainColor,
        };
        localStorage.setItem("main", JSON.stringify(initialState));
        return initialState;
    };

    const [state, setState] = useState({
        ...initializeState(),
        isDataLoaded: false,
        loading: { name: "", active: false },
        data: {
            work: [],
            about: {},
            skill: [],
            project: [],
            service: [],
            language: [],
            category: [],
            education: [],
            extraSkill: [],
            socialMedia: []
        },
    });

    const updateStateAndLocalStorage = (key, value) => {
        setState(prevState => {
            const newState = { ...prevState, [key]: value };
            localStorage.setItem("main", JSON.stringify({
                ...newState,
                loading: undefined,
                data: undefined,
            }));
            return newState;
        });
    };

    const changeActiveLeftMenu = () => updateStateAndLocalStorage('leftMenu', !state.leftMenu);
    const changeActiveRightMenu = () => updateStateAndLocalStorage('rightMenu', !state.rightMenu);
    const darkModeBody = () => updateStateAndLocalStorage('darkMode', !state.darkMode);
    const changeMainColor = (value) => updateStateAndLocalStorage("mainCl", value);

    useEffect(() => {
        document.body.classList.toggle('active', state.darkMode);
        document.documentElement.style.setProperty('--mainCl', state.mainCl);
    }, [state.darkMode, state.mainCl]);

    const setLoading = (name, active) => setState(prevState => ({ ...prevState, loading: { name, active } }));
    const setData = (data) => setState(prevState => ({ ...prevState, data }));

    const getMainPage = useCallback(async () => {
        setLoading("main", true);

        try {
            const res = await API.get("/main");
            const data = res.data;

            setData({
                work: data.work,
                about: data.about,
                skill: data.skill,
                project: data.project,
                service: data.service,
                language: data.language,
                category: data.category,
                education: data.education,
                extraSkill: data.extraSkill,
                socialMedia: data.socialMedia,
            });

            setState(prevState => ({
                ...prevState,
                isDataLoaded: Object.keys(data.about).length > 0 &&
                    data.work.length > 0 &&
                    data.skill.length > 0 &&
                    data.project.length > 0 &&
                    data.service.length > 0 &&
                    data.language.length > 0 &&
                    data.category.length > 0 &&
                    data.education.length > 0 &&
                    data.extraSkill.length > 0 && 
                    data.socialMedia.length > 0
            }));
        } catch (err) {
            console.log(err);
            showToast("error", err.response?.data?.message || err.message);
        } finally {
            setLoading("main", false);
        }
    }, []);

    useEffect(() => {
        getMainPage();
    }, [getMainPage]);

    return {
        ...state,
        darkModeBody,
        changeMainColor,
        changeActiveLeftMenu,
        changeActiveRightMenu,
    };
};
