import toast from "react-hot-toast";

export const showNotification = (type, msg) => {
    //alert(type);

    if (type === "success") {
        toast.success(msg);
    } else if (type === "error") {
        toast.error(msg);
    }
};
