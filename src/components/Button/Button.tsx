import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { IColors } from "../../interfaces/IColors";

import "./styles.scss";

export type ButtonSize = "small" | "normal" | "large";

interface IButtonProps {
  bgColor?: IColors;
  color?: IColors;
  borderColor?: IColors;
  size?: ButtonSize;
  children: ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({
  bgColor = "main",
  color = "dark-01",
  borderColor,
  size = "normal",
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
      {children}
    </button>
  );
};

export { Button };
