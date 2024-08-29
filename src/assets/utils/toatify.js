import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (status, text) => {
    if (status === "error") {
        return toast.error(text);
    } else if (status === "success") {
        return toast.success(text);
    } else if (status === "warning") {
        return toast.warning(text);
    }
};

