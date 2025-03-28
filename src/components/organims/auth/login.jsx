import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from '../../../assets/Authentication.module.css'

import Title from '../../molecules/authentication/title'
import Form from '../../molecules/authentication/form'
import Button from '../../molecules/authentication/button'

export default function OrgnLogin() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    // Función para manejar el envío del formulario
    const submit = async () => {
        if (!user || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const response = await fetch("http://3.216.152.229:3050/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: user, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Inicio de sesión exitoso:", data);
                sessionStorage.setItem("token", data.token); // Guardar el token en sessionStorage
                navigate('/home')
            } else {
                alert(data.message || "Error al iniciar sesión.");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            alert("Error en la conexión con el servidor.");
        }
    };







    return (
        <section className={styles['section-login']}>
            <Title classnameH1={styles['title-extra']} titleH1="Iniciar sesión en ChatOn"/>
            <div className={styles['container-login']}>
                <Form classnameLabel={styles['form-label-extra']} textLabel="Nombre de usuario" 
                    typeInput="text"
                    valueName={user}
                    typeName="name"
                    onChange={(e) => setUser(e.target.value)}/>
                <Form textLabel="Contraseña" 
                    typeInput={"password"}
                    valueName={password}
                    typeName="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <Button classnameButton={styles['extra-button']} textButton="Iniciar sesión" typeButton={"submit"} onClickButton={submit}/>
                <div>
                    <p className={styles['text-redirec-register']}>No tienes una cuenta? <a href="/register">Registrate</a></p>
                </div>
            </div>
        </section>
    )
}