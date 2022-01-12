import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from '../../app/store';
import { PageHome } from './PageHome';

describe("PageHome component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PageHome />
      </Provider>
    );
  });
  describe("intregration tests", () => {
    // TODO: add integtation test - cypress only since between page ?
    test.skip("adding a daily is added to the list of dailies", async () => {
      userEvent.type(
        screen.getByRole("textbox", { name: /daily/i }),
        "this is a daily test"
      );
      userEvent.click(screen.getByText("submit"));
      userEvent.click(screen.getByRole("button", { name: /Daily List/i }));
      expect(await screen.findByText("this is a daily test")).toBeDefined();
    });
  });
});
