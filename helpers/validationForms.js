export const registerValidation = (userValues) => {
    const { username, password, email } = userValues
    let errors = {}

    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (username === '' || undefined){
        errors.usernameError = 'Nazwa użytkownika jest wymagana!'
    } else if(username.length<3 || username.length>10){
        errors.usernameError = "Nazwa użytkownika musi posiadać conajmniej 3, oraz nie więcej niż 10 znaków!"
    }

    if (password === '' || undefined){
        errors.passwordError = 'Hasło jest wymagane!'
    } else if(password.length<7){
        errors.passwordError = 'Hasło musi posiadać conajmniej 7 znaków!'
    }

    if (email === '' || undefined){
        errors.emailError = 'E-mail jest wymagany!'
    } else if(!email.match(regexEmail)){
        errors.emailError = 'E-mail jest nieprawidłowy!'
    }

    if (Object.keys(errors).length === 0){
        return {success: true}
    } else{
        return errors
    }
}