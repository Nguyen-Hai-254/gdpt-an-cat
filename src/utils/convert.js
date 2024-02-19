import DOMPurify from "dompurify";

export const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file.target.files[0]);
        reader.onload = () => {
            resolve(reader.result)
        };
        reader.onerror = error => reject(error);
    })
}

export const createMarkup = (html) => {
    return {
        __html: DOMPurify.sanitize(html)
    }
}