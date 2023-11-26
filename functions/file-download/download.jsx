export function downloadFile(url) {
  url.forEach((file, index) => {
    fetch(file.original)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        const fileExtension = file.original.split(".").pop();
        link.download = `file${index + 1}.${fileExtension}`;
        link.click();
        URL.revokeObjectURL(link.href);
        handleClick();
        localStorage.setItem("hasUserData", true);
      });
  });
}
