import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from ".";

describe("<Button />", () => {
  it("should be able to render the correct title", () => {
    const title = "Test-01";

    render(<Button>{title}</Button>);

    expect(screen.getByText(title)).toBeTruthy();
  });

  it("should be able to render the normal size prop equal normal by default", () => {
    const title = "Test-02";

    render(<Button>{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("c-button-size-normal");
  });

  it("should be able to render the small size when passed by prop", () => {
    const title = "Test-03";

    render(<Button size="small">{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("c-button-size-small");
  });

  it("should be able to render the large size when passed by prop", () => {
    const title = "Test-04";

    render(<Button size="large">{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("c-button-size-large");
  });

  it("should be able to render the dark-01 color text by default", () => {
    const title = "Test-05";

    render(<Button>{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("color-dark-01");
  });

  it("should be able to render the color text passed by props", () => {
    const title = "Test-06";

    render(<Button color="error">{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("color-error");
  });

  it("should be able to render the main background-color by default", () => {
    const title = "Test-07";

    render(<Button>{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("bg-main");
  });

  it("should be able to render the color background passed by props", () => {
    const title = "Test-08";

    render(<Button bgColor="light-03">{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("bg-light-03");
  });

  it("should be able to render the borderColor equal bgColor by default", () => {
    const title = "Test-09";

    render(<Button bgColor="main-dark">{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("border-color-main-dark");
  });

  it("should be able to render the borderColor passed by props", () => {
    const title = "Test-10";

    render(<Button borderColor="light-03">{title}</Button>);

    expect(screen.getByText(title)).toHaveClass("border-color-light-03");
  });

  it("should be able to dispatch onclick function when click the button", () => {
    const title = "Test-11";
    const onClickMock = jest.fn();

    render(
      <Button
        borderColor="light-03"
        buttonProps={{
          onClick: onClickMock,
        }}
      >
        {title}
      </Button>
    );

    const buttonComponent = screen.getByText(title);
    fireEvent.click(buttonComponent);

    expect(onClickMock).toHaveBeenCalled();
  });
});
