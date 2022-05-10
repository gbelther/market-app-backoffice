import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TopBar } from "./TopBar";

describe("<TopBar />", () => {
  it("should be able to render correctly", () => {
    render(<TopBar />);

    expect(screen.getByLabelText("Top bar component")).toBeInTheDocument();
  });

  describe("Add Button", () => {
    it("should not be able to render the add button when onClickAddButton is not passed by props", () => {
      render(<TopBar />);
      expect(screen.queryByLabelText("Add button")).not.toBeInTheDocument();
    });

    it("should be able to render the add button when onClickAddButton is passed by props", () => {
      const onClickAddButtonMock = jest.fn();

      render(<TopBar onClickAddButton={onClickAddButtonMock} />);
      expect(screen.getByLabelText("Add button")).toBeInTheDocument();
    });

    it("should be able to call the onClickAddButton function when click the button", () => {
      const onClickAddButtonMock = jest.fn();

      render(<TopBar onClickAddButton={onClickAddButtonMock} />);
      const button = screen.getByLabelText("Add button");
      userEvent.click(button);

      expect(onClickAddButtonMock).toHaveBeenCalled();
    });
  });
});
