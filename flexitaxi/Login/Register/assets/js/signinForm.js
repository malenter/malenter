import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from './firebase.js'
import {ShowMessage} from './showMessage.js'

const formulario_login = document.querySelector('#formulario__login')
formulario_login.addEventListener('submit', async e => {
    e.preventDefault()
    const email = formulario_login['login_correo'].value
    const password = formulario_login['login_contrasena'].value

    try{
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log( )
    setTimeout(function() {
        window.location.href = "../../menu.html";
      }, 1000);
    ShowMessage("Bienvenido " + credentials.user.email)
    }catch (error){
        if (error.code === 'auth/wrong-password'){
            ShowMessage("Contraseña incorrecta","error")
            //alert("Este correo ya está registrado")
        }
        else if (error.code === 'auth/user-not-found')   {
            ShowMessage("El usuario no fue encontrado","error")
            //alert("Correo Inválido")
        } else if (error.code){
            ShowMessage("Ocurrio un error","error")
            //alert("Ocurrio Un error")
        }
     }
})