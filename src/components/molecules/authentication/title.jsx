import logo from '../../../assets/img/logo.png'
import styles from './authentication.module.css'

export default function Title({classnameH1, titleH1}){
    return (
        <div className={`${styles['div-title']} ${classnameH1}`}>
            <img src={logo}/>
            <h1 className={classnameH1}>{titleH1}</h1>
        </div>
    )
}