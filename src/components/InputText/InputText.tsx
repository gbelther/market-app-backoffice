import { InputHTMLAttributes, useMemo } from "react";

import { IInputFeedback } from "../../interfaces/IInputFeedback";

import "./styles.scss";

interface IInputTextProps {
  label?: string;
  showLabel?: boolean;
  feedback?: IInputFeedback;
  showFeedback?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputText = ({
  label,
  showLabel = true,
  feedback,
  showFeedback = true,
  inputProps,
}: IInputTextProps) => {
  const inputClassName = useMemo(() => {
    const classNameBase = "c-input-text--input";

    if (feedback?.type) {
      return `${classNameBase} border-color-${feedback.type}`;
    }

    return classNameBase;
  }, [feedback?.type]);

  const feedbackClassName = useMemo(() => {
    const classNameBase = "c-input-text--feedback-text";

    if (feedback?.type) {
      return `${classNameBase} color-${feedback.type}`;
    }

    return classNameBase;
  }, [feedback?.type]);

  return (
    <div className="c-input-text">
      {showLabel && (
        <label htmlFor={inputProps?.id} className="c-input-text--label-text">
          {label}
        </label>
      )}
      <input {...inputProps} type="text" className={inputClassName} />
      {showFeedback && (
        <label className={feedbackClassName}>{feedback?.message}</label>
      )}
    </div>
  );
};

export { InputText };