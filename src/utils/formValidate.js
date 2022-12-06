export const formValidate = (getValues) => {

    return {
        //Validación - Campo Obligatorio
        required: { value: true, message: "Campo Obligatorio." },
        //Validación - Formato de Email
        patternEmail: {
            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
            message: "Formato de email inválido.",
        },
        //Validación - Mínimo de 6 caracteres
        minLength: { value: 6, message: "Mínimo 6 caracteres." },
        //Validación - No estacios en blanco
        validateNoSpace: {
            trim: (v) => {
                if (!v.trim()) return "No se admiten espacios en blanco.";
                true;
            },
        },
        //Validación - No coinciden las contraseñas
        validateRePass(getValues) {
            return {
                equals: (v) =>
                    v === getValues("password") || "Las contraseñas no coincide.",
            }
        },


    }

}