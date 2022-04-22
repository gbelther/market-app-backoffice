import { render, screen } from "@testing-library/react";

import { InputText } from ".";

describe("<InputText />", () => {
  it("should be able to render correctly", () => {
    render(<InputText />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should be able to render the label text correctly", () => {
    const label = "test-02";

    render(<InputText label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("should be able to render the feedback text correctly", () => {
    const feedback = "test-03";

    render(
      <InputText
        feedback={{
          type: "error",
          message: feedback,
        }}
      />
    );

    expect(screen.getByText(feedback)).toBeInTheDocument();
  });

  it("should be able to render the error feedback text with correct className", () => {
    const feedback = "test-04";

    render(
      <InputText
        feedback={{
          type: "error",
          message: feedback,
        }}
      />
    );

    expect(screen.getByText(feedback)).toHaveClass("color-error");
  });

  it("should be able to render the success feedback text with correct className", () => {
    const feedback = "test-05";

    render(
      <InputText
        feedback={{
          type: "success",
          message: feedback,
        }}
      />
    );

    expect(screen.getByText(feedback)).toHaveClass("color-success");
  });

  it("should be able to render the input border color correct according feedback", () => {
    const feedback = "test-06";

    render(
      <InputText
        feedback={{
          type: "success",
          message: feedback,
        }}
      />
    );

    expect(screen.getByRole("textbox")).toHaveClass("border-color-success");
  });
});
