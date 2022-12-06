import { forwardRef } from "react";

const FormInputsText = forwardRef(
  ({ type, placehoder, onChange, onBlur, name, style, children }, ref) => {

    //style

    const inputStyle = { margin: "5px", padding: "3px 8px" };

    return (
      <>
      <input
        style={inputStyle}
        type={type}
        placeholder={placehoder}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
      {children}
      </>
    );
  }
);

export default FormInputsText;
