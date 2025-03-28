import styles from './authentication.module.css'
export default function Form({classnameLabel, textLabel, classnameInput, valueName, typeInput, typeName, typeId, onChange}){
    return (
        <div className={styles['form']}>
            <label className={`${styles['label-form']} ${classnameLabel}`}>{textLabel}</label>
            <input className={`${styles['input-form']} ${classnameInput}`} 
                type={typeInput} 
                value={valueName} 
                name={typeName} 
                id={typeId}
                onChange={onChange}/>
        </div>
    )
}