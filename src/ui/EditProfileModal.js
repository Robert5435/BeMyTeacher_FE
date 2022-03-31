import { useAtom } from 'jotai';
import UploadImage from '../components/UploadImage';
import { isEditProfileModal,user } from '../STORE';
import classes from './EditProfileModal.module.css';

function EditProfileModal() {
    const [showModal, setShowModal] = useAtom(isEditProfileModal);
    const [userInfo, setUserInfo] = useAtom(user);
    var url = "https://localhost:5001/images/" + userInfo.photoPath;

    return (<div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
            <div className={classes.titleCloseBtn}>
                <button onClick={() => { setShowModal(false) }}> X </button>
            </div>
            <div className={classes.body}>
                <form>
                    <div className={classes.control}>
                        <p>Change Profile Picture</p>
                        <img className={classes.thumbnail} src={url} alt =''></img>
                        <UploadImage/>
                        <p>Edit Phone Number</p>
                        <input type="text" defaultValue={userInfo.phoneNumber}/>
                    </div>
                </form>
            </div>
            <div className={classes.footer}>
                <button onClick={() => { setShowModal(false) }}>Submit</button>
            </div>

        </div>
    </div>)

}

export default EditProfileModal;