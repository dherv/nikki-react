import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as auth from '../../lib/auth';
import { Confirm } from './Confirm';

jest.mock("../../lib/auth", () => ({
  confirm: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe("Confirm component", () => {
  const history = createMemoryHistory();
  const pushSpy = jest.spyOn(history, "push"); // or 'replace', 'goBack', etc.

  beforeEach(() => {
    render(
      <Router history={history}>
        <Confirm></Confirm>
      </Router>
    );
  });
  test("should complete the form and call login", async () => {
    const login = jest
      .spyOn(auth, "confirm")
      .mockImplementation(() => Promise.resolve({} as any));
    userEvent.type(screen.getByLabelText("username"), "bob");
    userEvent.type(screen.getByLabelText("code"), "123456");

    await waitFor(() => {
      expect(/bob/).toBeDefined();
      expect(/123456/).toBeDefined();
    });

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        username: "bob",
        code: "123456",
      });
      expect(pushSpy).toHaveBeenCalledWith("/auth");
    });
  });
});
