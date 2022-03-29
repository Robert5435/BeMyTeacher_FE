import { useAtom } from 'jotai';
import UploadImage from '../components/UploadImage';
import { isEditProfileModal } from '../STORE';
import classes from './Modal.module.css';

function EditProfileModal() {
    const [showModal, setShowModal] = useAtom(isEditProfileModal);

    return (<div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
            <div className={classes.titleCloseBtn}>
                <button onClick={() => { setShowModal(false) }}> X </button>
            </div>
            <div className={classes.body}>
                <form>
                    <div className={classes.control}>
                        <p>Change Profile Picture</p>
                        <img className={classes.thumbnail} src='https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg' alt =''></img>
                        <UploadImage/>
                        <p>Edit Phone Number</p>
                        <input type="text" defaultValue={"0754027983"}/>
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