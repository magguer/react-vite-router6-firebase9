export const firebaseErrors = (errorCode) => {
    switch (errorCode) {
        case "auth/email-already-in-use":
            return "Email ya registrado, prueba con otro.";
        case "auth/invalid-email":
            return "Formato de email no valido.";
        case "auth/wrong-password":
            return "Contraseña incorrecta."
        case "auth/user-not-found":
            return "No existe el usuario."
        default:
            return "Intentalo más tarde.";
    }
}