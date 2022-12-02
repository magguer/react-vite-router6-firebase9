// Imports React Router
import { useNavigate } from "react-router-dom";


//Imports React Gook Form

import { useForm } from "react-hook-form";

// Imports React
import { useContext, useState } from "react";

// Imports Contexts
import { UserContext } from "../context/UserProvider";

const RegisterUser = () => {
  //Estilos
  const inputStyle = { margin: "5px", padding: "3px 8px" };
  const buttonStyle = { margin: "5px", padding: "3px 8px" };

  //useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //useContext
  const { registerEmailUser } = useContext(UserContext);

  //useForm
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email, password }) => {
    try {
      await registerEmailUser(email, password);
      navigate("/userdata");
    } catch (error) {
      if ( error.code === 'auth/email-already-in-use'){
        setError("email", {
          message: 'Email ya registrado, prueba con otro.'

        })
      }
      console.log(error.code);
    }
  };

  // Navigate
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Registro de Usuarios</h1>
      <form
        style={{ display: "grid", margin: "0 auto", width: "300px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Campo Obligatorio." },
            minLength: { value: 6, message: "Mínimo 6 caracteres." },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
              message: "Formato de email inválido.",
            },
          })}
          /*           value={email}
          onChange={(e) => setEmail(e.target.value)} */
        />
        {errors.email && errors.email.message}
        <input
          style={inputStyle}
          type="password"
          placeholder="Inserte contraseña"
          name="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "Campo Obligatorio." },
            minLength: { value: 6, message: "Mínimo 6 caracteres." },
            validate: {
              trim: (v) => {
                if (!v.trim()) return "No se admiten espacios en blanco.";
                true;
              },
            },
          })}
          /*           value={password}
          onChange={(e) => setPassword(e.target.value)} */
        />
        {errors.password && errors.password.message}
        <input
          style={inputStyle}
          type="password"
          placeholder="Verifique la contraseña"
          name="passwordrepeat"
          id="passwordrepeat"
          {...register("passwordrepeat", {
            required: { value: true, message: "Campo Obligatorio." },
            minLength: { value: 6, message: "Mínimo 6 caracteres." },
            validate: {
              equals: (v) =>
                v === getValues("password") || "Las contraseñas no coincide.",
            },
          })}
        />
        {errors.passwordrepeat && errors.passwordrepeat.message}
        <button type="submit" style={buttonStyle}>
          Registrar Usuario
        </button>
      </form>
    </>
  );
};

export default RegisterUser;
