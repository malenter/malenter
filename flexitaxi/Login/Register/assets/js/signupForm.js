import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from './firebase.js'
import {ShowMessage} from './showMessage.js'
const formulario_register = document.querySelector('#formulario__register')
formulario_register.addEventListener('submit', async (e)=> {
     e.preventDefault()
     const email = formulario_register['login_Email'].value
     const password = formulario_register['login_Password'].value
     const usuario = formulario_register['login_Usuario'].value
     const nombre = formulario_register['login_Nombre'].value
     
     console.log(nombre, email, usuario, password)
     try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        setTimeout(function() {
            window.location.href = "index.html";
          }, 1000);
        ShowMessage("Bienvenido " + userCredentials.user.email)
     }catch (error){
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'){
            ShowMessage("Este correo ya está registrado","error")
            //alert("Este correo ya está registrado")
        }
        else if (error.code === 'auth/invalid-email')   {
            ShowMessage("Correo inválido","error")
            //alert("Correo Inválido")
        } else if (error.code === 'auth/weak-password'){
            ShowMessage("La contraseña es demasiado débil","error")
            //alert("La contraseña es demasiado débil")
        } else if (error.code){
            ShowMessage("Ocurrio un error","error")
            //alert("Ocurrio Un error")
        }
     }

    })
