import { useAtom } from 'jotai';
import { isModal,isDeleting } from '../STORE';
import classes from './Modal.module.css';

function Modal() {
    const [showModal, setShowModal] = useAtom(isModal);
    const [isDeletingAd, setIsDeletingAd] = useAtom(isDeleting);

    return (<div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
            <div className={classes.titleCloseBtn}>
                <button onClick={() => { setShowModal(false) }}> X </button>
            </div>
            <div className={classes.title}>
                <h1>You are going to delete your Ad, do you wish to continue?</h1>
            </div>
            <div className={classes.footer}>
                <button onClick={() => {setIsDeletingAd(true)}} >Yes</button>
                <button onClick={() => { setShowModal(false) }}>No</button>
            </div>

        </div>
    </div>)

}

export default Modal;