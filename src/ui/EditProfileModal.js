import { useAtom } from 'jotai';
import { useRef, useState } from 'react';
import UploadImage from '../components/UploadImage';
import { isEditProfileModal, user } from '../STORE';
import classes from './EditProfileModal.module.css';

function EditProfileModal() {
    const phNumberInputRef = useRef();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [showModal, setShowModal] = useAtom(isEditProfileModal);
    const [userInfo, setUserInfo] = useAtom(user);
    var url = "https://localhost:5001/images/" + userInfo.photoPath;

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true)
    };


    const handleSubmissionFile = () => {
        var enteredPhNumber;
        if(phNumberInputRef.current.value != null){
            enteredPhNumber = phNumberInputRef.current.value;
        }else{
            enteredPhNumber = userInfo.phoneNumber;
        }
         

        const formData = new FormData();

        formData.append('File', selectedFile);
        formData.append('phNumber', enteredPhNumber);


        fetch(
            'https://localhost:5001/Users/Upload',
            {
                headers: new Headers({ 'Authorization': 'Bearer' }),
                credentials: 'include',
                method: 'POST',
                body: formData,

            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            setShowModal(false)
    };

    return (<div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
            <div className={classes.titleCloseBtn}>
                <button onClick={() => { setShowModal(false) }}> X </button>
            </div>
            <div className={classes.body}>
                <form>
                    <div className={classes.control}>
                        <p>Change Profile Picture</p>
                        <div >
                            <label htmlFor="file-upload" style={{
                                border: "1px solid #ccc",
                                display: "inline-block",
                                padding: "6px 12px",
                                cursor: "pointer"
                            }}>Upload Image</label>
                            <input type="file" id="file-upload" name="file" onChange={changeHandler} style={{ display: "none" }} />
                        </div>
                        <p>Edit Phone Number</p>
                        <input type="text" defaultValue={userInfo.phoneNumber} ref={phNumberInputRef} />
                    </div>
                </form>
            </div>
            <div className={classes.footer}>
                <button onClick={handleSubmissionFile}>Submit</button>
            </div>

        </div>
    </div>)

}

export default EditProfileModal;