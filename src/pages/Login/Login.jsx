import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/AuthProvider";
import { useState } from "react";
import axios from "axios";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import Styles from "./Login.module.scss"

export const Login = () => {

    const { register, handleSubmit, reset, formState: {errors}} = useForm()
    const { loginData, setLoginData } = useAuth()
    const [ errMes, setErrMes ] = useState('')

    
   
    const loginRequest = async (data) => {
        const formData = new FormData();
        formData.append("username", data.username)
        formData.append("password", data.password)

        const endpoint = `http://localhost:4000/login`;
        try {
            const res = await axios.post(endpoint, formData)
            handleSessionData(res.data.access_token)
        }
        catch(err) {
            console.error('Kunne ikke logge ind')
            setErrMes('Forkert brugernavn eller password')
        }
    }

    const handleSessionData = data => {
        if(data) {
            sessionStorage.setItem('token', JSON.stringify(data));
            setLoginData(data)
        }
    }
 
    const LogOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
        reset()


        console.log("Logget ud korrekt")
    }

    return (
        <ContentWrapper title="Login">
            {!loginData && !loginData.username ?
            (
                    <form onSubmit={handleSubmit(loginRequest)} className={Styles.loginStyling}>
                        <div className={Styles.container}> 
                            <h1>Login</h1>
                            <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
                        </div>


                            <input type="text" name="username" placeholder="Brugernavn" id="username" {...register("username", {required: true})} />
                            {errors.username && ( <div className={Styles.error}>Tast dit brugernavn!</div> )}
                     

                      
                            <input type="password" name="password" placeholder="Adgangskode" id="password"{...register("password", {required: true})} />
                            {errors.password && (<div className={Styles.error}>Tast din adgangskode!</div>)}
                    
                        {errMes && (<div className={Styles.error}>{errMes}</div>)}
                        <div className={Styles.buttonContainer}>
                            <button>Log Ind</button>
                            <button onClick={() => reset()}>Annuller</button>
                        </div>
                    </form>
            
            ) : (
            <div>
                   <h1>{loginData.username} er logget ind</h1>
                    <button onClick={LogOut}>Log ud</button>
            </div>

            )}

        </ContentWrapper>
    )

}