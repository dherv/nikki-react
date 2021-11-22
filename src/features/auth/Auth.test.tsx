import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as auth from '../../lib/auth';
import { Auth } from './Auth';

jest.mock("../../lib/auth", () => ({
  login: jest.fn().mockImplementation(() => Promise.resolve()),
}));

describe("Auth component", () => {
  const history = createMemoryHistory();
  const pushSpy = jest.spyOn(history, "push"); // or 'replace', 'goBack', etc.

  beforeEach(() => {
    render(
      <Router history={history}>
        <Auth></Auth>
      </Router>
    );
  });
  test("should complete the form and call login", async () => {
    const login = jest
      .spyOn(auth, "login")
      .mockImplementation(() => Promise.resolve({} as any));
    userEvent.type(screen.getByLabelText("username"), "bob");
    userEvent.type(screen.getByLabelText("password"), "iambob");

    await waitFor(() => {
      expect(/bob/).toBeDefined();
      expect(/iambob/).toBeDefined();
    });

    userEvent.click(screen.queryAllByRole("button")[0]);

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        username: "bob",
        password: "iambob",
      });
      expect(pushSpy).toHaveBeenCalledWith("/home");
    });
  });

  test("should switch between login and register", () => {
    userEvent.click(screen.getByText(/Register/));
    expect(screen.getAllByText(/Login/)).toBeDefined();
  });
});
