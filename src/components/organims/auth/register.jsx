import { useNavigate } from "react-router-dom"
import Form from "../../molecules/authentication/form"
import Button from "../../molecules/authentication/button"
import Title from "../../molecules/authentication/title"

import styles from '../../../assets/Authentication.module.css'

export default function OrgnRegister(){


    const navigate = useNavigate();

    const submit = (e) => {
        console.log('Register success')
        navigate('/home')
    }
    

    return (
        <section className={styles['section-login']}>
                <Title classnameH1={styles['title-extra']} titleH1="Registrarse en ChatOn"/>
                <div className={styles['container-login']}>
                    <Form classnameLabel={styles['form-label-extra']} textLabel="Nombre de usuario" typeInput={"text"}/>
                    <Form textLabel="Contraseña" typeInput={"password"}/>
                    <Form textLabel={"Confirmar contraseña"} typeInput={"password"}/>
                    <Button classnameButton={styles['extra-button']} textButton="Iniciar sesión" typeButton={"submit"} onClickButton={submit}/>
                    <div>
                        <p className={styles['text-redirec-register']}>Ya tienes una cuenta? <a href="/">Inicia sesión</a></p>
                    </div>
                </div>
        </section>
    )
}