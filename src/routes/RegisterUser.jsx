// Imports React Router
import { useNavigate } from "react-router-dom";

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

const RegisterUser = () => {
  //Estilos

  const buttonStyle = { margin: "5px", padding: "3px 8px" };
  const divRegister = {
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
  };

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
      setError("firebase", {
        message: firebaseErrors(error.code),
      });
    }
  };

  // Navigate
  const navigate = useNavigate();

  return (
    <>
      <div style={divRegister}>
        <h1 style={{ textAlign: "center", display: "inline" }}>
          Registro de Usuarios
        </h1>

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

          <FormInputsText
            type="password"
            placeholder="Verifique la contraseña"
            name="passwordrepeat"
            id="passwordrepeat"
            {...register("passwordrepeat", {
              required,
              minLength,
              validate: validateRePass(getValues),
            })}
          >
            <FormErrors error={errors.passwordrepeat} />
          </FormInputsText>

          <button type="submit" style={buttonStyle}>
            Registrar Usuario
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
