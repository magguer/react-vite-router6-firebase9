const FormErrors = ({error}) => {
  return <div className="text-center mt-2 text-red-600 dark:text-red-500">{error && error.message}</div>;
};

export default FormErrors;
