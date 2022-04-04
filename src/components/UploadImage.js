import { useState } from "react";

function UploadImage() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true)
    };

    

    return (
        <div >
            <label htmlFor="file-upload" style={{
                border: "1px solid #ccc",
                display: "inline-block",
                padding: "6px 12px",
                cursor: "pointer"
            }}>Upload Image</label>
            <input type="file" id="file-upload" name="file" onChange={changeHandler} style={{ display: "none" }} />
        </div>
    )
}
export default UploadImage;