import { useNavigate } from "react-router-dom";
import { showToast } from "./toatify";

export const useHandleAPIError = (err) => {
    const navigate = useNavigate()

    return (err) => {
        if (err.response?.status === 403) {
            return navigate("/403")
        }
        if (err.response?.status === 401) {
            return navigate("/login");
        } else {
            return showToast("error", err?.response?.data?.message || "An error occurred");
        }
    };
};