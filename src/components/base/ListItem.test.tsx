import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListItem } from './ListItem';

describe("ListItem component", () => {
  const defaultProps = { id: "1", text: "text", onClickDelete: jest.fn() };

  describe("props", () => {
    test("should show the list item text", () => {
      render(<ListItem {...defaultProps} />);
      expect(screen.getByText("text")).toBeDefined();
    });
    test("should show the list item remove icon", () => {
      render(<ListItem {...defaultProps} />);
      expect(screen.getByRole("icon", { name: /remove icon/ })).toBeDefined();
    });
  });

  describe("events", () => {
    test("should call the delete event when click delete icon", () => {
      render(<ListItem {...defaultProps} />);
      userEvent.click(screen.getByRole("icon"));
      expect(defaultProps.onClickDelete).toHaveBeenCalledWith(defaultProps.id);
    });
  });
});
