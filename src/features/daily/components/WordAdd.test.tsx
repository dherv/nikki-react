import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../../app/store';
import { WordAdd } from './WordAdd';

jest.mock("uuid", () => ({
  v4: () => "testId",
}));

describe("WordAdd component", () => {
  const baseProps = {
    show: true,
    text: "word",
    onSubmit: jest.fn(),
    onClose: jest.fn(),
  };

  test("should open modal if selectedWord is true", () => {
    render(
      <Provider store={store}>
        <WordAdd {...baseProps}></WordAdd>
      </Provider>
    );
    expect(screen.getByRole("dialog", { name: "add word" })).toBeDefined();
  });

  test("should hide modal if selectedWord is false", () => {
    const props = { ...baseProps, show: false };
    render(
      <Provider store={store}>
        <WordAdd {...props}></WordAdd>
      </Provider>
    );
    expect(screen.queryByRole("dialog", { name: "add word" })).toBeNull();
  });

  test("should close modal display the text in a disabled input", async () => {
    render(
      <Provider store={store}>
        <WordAdd {...baseProps}></WordAdd>
      </Provider>
    );
    expect(screen.getByDisplayValue("word")).toBeDisabled();
  });

  test("should submit the form with the correct values - word, translation, id", async () => {
    render(
      <Provider store={store}>
        <WordAdd {...baseProps}></WordAdd>
      </Provider>
    );
    userEvent.type(screen.getByLabelText("translation"), "translation");
    userEvent.click(screen.getByRole("button", { name: "add" }));
    await waitFor(() =>
      expect(baseProps.onSubmit).toHaveBeenCalledWith({
        id: "testId",
        text: "word",
        translation: "translation",
      })
    );
  });

  // TODO: add integration test for search functionality
  test.skip("should search the words and display them", () =>
    console.info("todo"));
});
