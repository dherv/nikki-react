import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../app/store';
import { Aside } from './Aside';

describe("Aside component", () => {
  const defaultProps = { show: false, onClick: jest.fn() };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Aside {...defaultProps} />
      </Provider>
    );
  });
  test("should show the close icon if show false", () => {
    expect(screen.getByRole("icon", { name: /close icon/ })).toBeDefined();
  });
  test("should call onClick when click close icon", () => {
    userEvent.click(screen.getByRole("icon", { name: /close icon/ }));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
