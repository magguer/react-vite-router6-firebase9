//Imports React
import { useContext } from "react";
//Imports Contexto
import { UserContext } from "../context/UserProvider";
//Imports Router Dom
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Imports Hook Form
import { useForm } from "react-hook-form";
//Imports Funciones
import { firebaseErrors } from "../utils/firebaseErrors";
//Imports Componentes
import FormInputsText from "../components/Forms/FormInputsText";
import FormErrors from "../components/Forms/Errors/FormErrors";
import { formValidate } from "../utils/formValidate";

const Login = () => {
  //Estilos
  const inputStyle = { margin: "5px", padding: "3px 8px" };
  const buttonStyle = { margin: "5px", padding: "3px 8px" };

  // useContext
  const { loginEmailUser } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  // Validaciones de Formulario
  const { required, patternEmail, minLength, validateNoSpace, validateRePass } =
  formValidate();

  //Funciones
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await loginEmailUser(email, password);
      navigate("/userdata");
    } catch (error) {
      console.log(error.code);
      setError("firebase", {
        message: firebaseErrors(error.code),
      });
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login de Usuarios</h1>
      <form
        style={{ display: "grid", margin: "0 auto", width: "300px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormErrors error={errors.firebase} />

        <FormInputsText
          type="email"
          placeholder="Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
          <FormErrors error={errors.email} />
        </FormInputsText>

        <FormInputsText
          type="password"
          placeholder="Inserte contraseña"
          name="password"
          id="password"
          {...register("password", {
            required,
            minLength,
            validate: validateNoSpace,
          })}
        >
          <FormErrors error={errors.password} />
        </FormInputsText>

        <button type="submit" style={buttonStyle}>
          Acceder
        </button>
        <NavLink style={{ textAlign: "center" }} to="/register">
          Aun no tienes usuario? Registrate.
        </NavLink>
      </form>
    </>
  );
};

export default Login;
