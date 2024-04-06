import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("teste para o componente principal", () => {
  test("deve renderizar corretamente", () => {
    render(<App />);

    expect(screen.getByTestId("post-comments")).toBeInTheDocument();

    const commentInput = screen.getByTestId("comment-input");
    fireEvent.change(commentInput, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

    fireEvent.change(commentInput, { target: { value: "Segundo comentário" } });
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
