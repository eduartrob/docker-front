import styles from './authentication.module.css'

export default function Button({textButton, classnameButton, typeButton, onClickButton}){
    return (
        <button className={`${styles['button']} ${classnameButton}`} type={typeButton} onClick={onClickButton}>{textButton}</button>
    )
}