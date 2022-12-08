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
import { formValidate } from "../utils/formValidate";
//Imports Componentes
import FormInputsText from "../components/Forms/FormInputsText";
import FormErrors from "../components/Forms/Errors/FormErrors";
import ButtonBasic1 from "../components/Buttons/ButtonBasic1";
import TitleForm from "../components/Forms/TitleForm";

const Login = () => {
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
      const { code, message } = firebaseErrors(error.code);
      setError(code, { message });
    }
  };

  return (
    <>
      <TitleForm textTitle={"Ingreso de Usuario"} />
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="text-center mb-3">
          <ButtonBasic1 textButton={"Acceder"} type="submit" />
        </div>
        <div className="text-center">
          <NavLink to="/register">¿No tienes usuario? Registrate acá.</NavLink>
        </div>
      </form>
    </>
  );
};

export default Login;
