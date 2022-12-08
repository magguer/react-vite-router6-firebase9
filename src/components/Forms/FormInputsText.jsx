import { forwardRef } from "react";

const FormInputsText = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, style, children }, ref) => {
    //style

    const inputStyle = { margin: "5px", padding: "3px 8px" };

    return (
      <div className="mb-4">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </div>
    );
  }
);

export default FormInputsText;
