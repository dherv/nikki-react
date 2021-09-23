import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from './Login';

describe("Login component", () => {
  const props = {
    onChange: jest.fn(),
    onLogin: jest.fn(),
    form: { username: "", password: "" },
  };
  beforeEach(() => {
    render(<Login {...props}></Login>);
  });
  test("should update username display value on type", async () => {
    userEvent.type(screen.getByLabelText("username"), "bob");
    await waitFor(() =>
      expect(screen.getByLabelText("username")).toHaveDisplayValue("bob")
    );
  });

  test("should update username display value on type", async () => {
    userEvent.type(screen.getByLabelText("password"), "password");
    await waitFor(() =>
      expect(screen.getByLabelText("password")).toHaveDisplayValue("password")
    );
  });

  test("should call onLogin on click", async () => {
    userEvent.type(screen.getByLabelText("username"), "bob");
    userEvent.type(screen.getByLabelText("password"), "password");

    userEvent.click(screen.getByRole("button"));
    await waitFor(() =>
      expect(props.onLogin).toHaveBeenCalledWith({
        username: "bob",
        password: "password",
      })
    );
  });
});
