import { MdAdd } from "react-icons/md";

import { Button } from "../Button";

import "./styles.scss";

interface ITopBarProps {
  onClickAddButton?: () => void;
}

const TopBar = ({ onClickAddButton }: ITopBarProps) => {
  return (
    <header id="c-top-bar" aria-label="Top bar component">
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
