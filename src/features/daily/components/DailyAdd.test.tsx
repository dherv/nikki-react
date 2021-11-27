import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../../app/store';
import { DailyAdd } from './DailyAdd';

describe("DailyAdd component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <DailyAdd></DailyAdd>
      </Provider>
    );
  });

  test("should call window.getSelection selecting word using keyboard - shift/ctrl/arrow", async () => {
    window.getSelection = jest.fn();
    userEvent.type(screen.getByRole("textbox"), "test{shift}{ctrl}{arrowleft}");
    expect(window.getSelection).toHaveBeenCalled();
  });

  test("should call window.getSelection if selecting word using mouse", async () => {
    window.getSelection = jest.fn();
    userEvent.type(screen.getByRole("textbox"), "test{selectall}");
    expect(window.getSelection).toHaveBeenCalled();
  });

  test("should open modal when word selected", async () => {
    // need to mock getSelection since the test does not use the browser and except it to be empty everytime? Just typing and selecting does not work
    window.getSelection = () => ("test" as unknown) as Selection;
    // just interacting with the element will call getSelection
    userEvent.type(screen.getByRole("textbox"), "test{shift}{ctrl}{arrowleft}");
    expect(
      await screen.findByRole("dialog", { name: "add word" })
    ).toBeDefined();
  });

  test("should show error on text validation", async () => {
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    expect(await screen.findByText("please enter a daily text")).toBeDefined();
  });

  test("should handle input type and clear error on text input", async () => {
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    expect(await screen.findByText("please enter a daily text")).toBeDefined();
    userEvent.type(screen.getByRole("textbox"), "daily text");
    await waitFor(() =>
      expect(screen.queryByText("please enter a daily text")).toBeNull()
    );
    expect(await screen.findByDisplayValue("daily text")).toBeDefined();
  });

  test("should add new word from modal and reset modal", async () => {
    window.getSelection = () => ("test" as unknown) as Selection;
    userEvent.type(screen.getByRole("textbox"), "test{shift}{ctrl}{arrowleft}");
    userEvent.type(screen.getByLabelText("translation"), "translation");
    userEvent.click(screen.getByRole("button", { name: "add" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: "add word" })).toBeNull()
    );
    expect(await screen.findByText("test - translation")).toBeDefined();
    userEvent.click(screen.getByRole("icon", { name: /remove icon/ }));
  });

  test("should remove word word on click cross icon", async () => {
    window.getSelection = () => ("test" as unknown) as Selection;
    userEvent.type(screen.getByRole("textbox"), "test{shift}{ctrl}{arrowleft}");
    userEvent.type(screen.getByLabelText("translation"), "translation");
    userEvent.click(screen.getByRole("button", { name: "add" }));
    expect(await screen.findByText("test - translation")).toBeDefined();
    userEvent.click(screen.getByRole("icon", { name: /remove icon/ }));
    await waitFor(() =>
      expect(screen.queryByRole("test - translation")).toBeNull()
    );
  });

  // TODO: add integration test
  test.skip("should submit the form and clear values", () =>
    console.info("todo"));
});
