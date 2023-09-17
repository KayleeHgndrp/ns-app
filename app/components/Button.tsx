'use client';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="
       relative
       w-full
       disabled:opacity-70
       disabled:cursor-not-allowed
       rounded-lg
       hover:opacity-80
       transition
       md:w-auto 
       min-w-max
       bg-blue-600
       px-4
       py-3
       text-white
       text-lg
       font-bold
       "
    >
      {label}
    </button>
  );
}

export default Button;