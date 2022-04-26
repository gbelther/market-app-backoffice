import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { IColors } from "../../interfaces/IColors";

import "./styles.scss";

export type ButtonSize = "small" | "normal" | "large";

interface IButtonProps {
  bgColor?: IColors;
  color?: IColors;
  borderColor?: IColors;
  size?: ButtonSize;
  spinnerSize?: string | number;
  loading?: boolean;
  children: ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({
  bgColor = "main",
  color = "dark-01",
  borderColor,
  size = "normal",
  spinnerSize = "1.25rem",
  loading = false,
  children,
  buttonProps,
}: IButtonProps) => {
  const buttonClassName = useMemo(() => {
    const classNameSize = `size-${size}`;

    return `c-button c-button-${classNameSize} bg-${bgColor} color-${color} border-color-${
      borderColor ?? bgColor
    }  ${buttonProps?.className ?? ""}`;
  }, [size, bgColor, color, borderColor, buttonProps?.className]);

  return (
    <button {...buttonProps} className={buttonClassName}>
      {loading ? (
        <ClipLoader color="#fff" loading={true} size={spinnerSize} />
      ) : (
        children
      )}
    </button>
  );
};

export { Button };
