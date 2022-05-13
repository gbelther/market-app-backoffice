import { MdAdd } from "react-icons/md";

import { Button } from "../Button";
import { IInputTextProps, InputText } from "../InputText";

import "./styles.scss";

interface ITopBarProps {
  inputTextProps?: IInputTextProps;
  onClickAddButton?: () => void;
}

const TopBar = ({ inputTextProps, onClickAddButton }: ITopBarProps) => {
  return (
    <header id="c-top-bar" aria-label="Top bar component">
      {!!inputTextProps && <InputText {...inputTextProps} />}
      {onClickAddButton && (
        <Button
          bgColor="main-extra-dark"
          buttonProps={{
            id: "top-bar-add-button",
            "aria-label": "Add button",
            onClick: onClickAddButton,
          }}
        >
          <MdAdd size={16} className="color-light-01" />
        </Button>
      )}
    </header>
  );
};

export { TopBar };
