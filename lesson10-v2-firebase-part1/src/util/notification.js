import toast from "react-hot-toast";

export function showNotification(type, msg) {
    if (type === "success") {
        toast.success(msg);
    } else if (type === "error") {
        toast.error(msg);
    }
}
