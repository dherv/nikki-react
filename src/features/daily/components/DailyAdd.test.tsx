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
  test("should fill the textarea", async () => {
    userEvent.type(screen.getByRole("textbox"), "this is a daily test");
    await waitFor(() =>
      expect(screen.queryByText("this is a daily test")).toBeDefined()
    );
  });
  test("should submit the form", async () => {
    userEvent.type(screen.getByRole("textbox"), "this is a daily test");
    userEvent.click(screen.getByRole("button"));
    await waitFor(() =>
      expect(screen.queryByText("this is a daily test")).toBeNull()
    );
  });
  // TODO: e2e to test the add => list
});
