const logoutLinks= document.querySelectorAll('.logout')

console.log(logoutLinks)
export const loginCheck = user =>{
    if(user){
        logoutLinks.forEach(link => link.style.display = 'block')
    }else{
        logoutLinks.forEach(link => link.style.display = 'none')
    }
}