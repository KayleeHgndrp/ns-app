import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
  } from "react-hook-form";
  
  interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    placeholder?: string; 
  }
  
  const Input: React.FC<InputProps> = ({
    id,
    type = "text",
    disabled,
    register,
    required,
    errors,
    placeholder = "", 
  }) => {
    return (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder} 
          type={type}
          className="
          w-full
          py-4 
          px-4 
        bg-white 
          rounded-md 
          dark:bg-wj-900 
          focus:outline-none 
          focus:ring-2    
        focus:ring-blue-600"
        />
    );
  };
  
  export default Input;