// Imports React Router
import { NavLink, useNavigate } from "react-router-dom";

//Imports React Gook Form
import { useForm } from "react-hook-form";

// Imports React
import { useContext } from "react";

// Imports Contexts
import { UserContext } from "../context/UserProvider";

// Imports Errores de Firebase
import { firebaseErrors } from "../utils/firebaseErrors";

// Imports Componentes
import FormInputsText from "../components/Forms/FormInputsText";
import FormErrors from "../components/Forms/Errors/FormErrors";

// Imports Validaciones
import { formValidate } from "../utils/formValidate";
import ButtonBasic1 from "../components/Buttons/ButtonBasic1";
import TitleForm from "../components/Forms/TitleForm";

const RegisterUser = () => {
  //Validaciones
  const { required, patternEmail, minLength, validateNoSpace, validateRePass } =
    formValidate();

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
      console.log(error.code);
      const { code, message } = firebaseErrors(error.code);
      setError(code, { message });
    }
  };

  // Navigate
  const navigate = useNavigate();

  return (
    <>
      <TitleForm textTitle={"Registro de Usuario"} />

      <form onSubmit={handleSubmit(onSubmit)}>
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

        <FormInputsText
          type="password"
          placeholder="Verifique la contraseña"
          name="passwordrepeat"
          id="passwordrepeat"
          {...register("passwordrepeat", {
            required,
            minLength,
            validate: validateRePass(getValues("password")),
          })}
        >
          <FormErrors error={errors.passwordrepeat} />
        </FormInputsText>
        <div className="text-center mb-3">
          <ButtonBasic1 textButton={"Registrar Usuario"} type="submit" />
        </div>
        <div className="text-center">
          <NavLink to="/login">¿Ya tenés usuario? Accede acá.</NavLink>
        </div>
      </form>
    </>
  );
};

export default RegisterUser;
