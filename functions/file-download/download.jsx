import toast from "react-hot-toast";

export function downloadFile(url, handleClick) {
  url.forEach((file) => {
    const newTab = window.open(file.original, '_blank');
    if (newTab) {
      newTab.focus();
    }

    handleClick();
    localStorage.setItem("hasUserData", true);
  });
}
