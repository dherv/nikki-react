import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe("Header component", () => {
  const defaultProps = { show: false, onClick: jest.fn() };

  test("should show the menu icon if show false", () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByRole("icon", { name: /menu icon/ })).toBeDefined();
  });
  test("should call onClick when click icon", () => {
    render(<Header {...defaultProps} />);
    userEvent.click(screen.getByRole("icon", { name: /menu icon/ }));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  test("should hide the menu icon if show true", () => {
    const props = { ...defaultProps, show: true };
    render(<Header {...props} />);
    expect(screen.queryByRole("icon", { name: /menu icon/ })).toBeNull();
  });
});
