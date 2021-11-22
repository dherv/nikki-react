import { Provider } from 'react-redux';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';
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
    test.skip("adding a daily is added to the list of dailies", async () => {
      userEvent.type(
        screen.getByRole("textbox", { name: /daily/i }),
        "this is a daily test"
      );
      userEvent.click(screen.getByText("submit"));
      userEvent.click(screen.getByRole("button", { name: /Daily List/i }));
      expect(await screen.findByText("this is a daily test")).toBeDefined();
    });

    test.skip("select a word in daily add it to the sidebar", async () => {
      userEvent.type(
        screen.getByRole("textbox", { name: /daily/i }),
        `this is a daily test${specialChars.selectAll}`
      );

      userEvent.click(screen.getByRole("textbox", { name: /daily/i }));
      userEvent.keyboard("[Shift][Ctrl][ArrowLeft]");
      const sidebar = screen.getByRole("complementary");
      expect(
        await within(sidebar).findByText("this is a daily test")
      ).toBeDefined();
    });

    test.skip("click add on word add it to daily word list", () => {
      console.warn("todo");
    });
    test.skip("click add on searched word add it to daily word list", () => {
      console.warn("todo");
    });
    test.skip("click remove word remove it to daily word list", () => {
      console.warn("todo");
    });
  });

  describe("event tests", () => {
    test.skip("switch between list and form daily", async () => {
      expect(screen.queryByRole("textbox", { name: /daily/i })).toBeDefined();
      userEvent.click(screen.getByRole("button", { name: /Daily List/ }));
      await waitFor(() =>
        expect(screen.queryByRole("textbox", { name: /daily/i })).toBeNull()
      );
      expect(await screen.findAllByText("test")).toHaveLength(2);
    });
    test("header click open sidebar", () => {
      userEvent.click(screen.getByRole("icon", { name: /menu icon/ }));
      expect(screen.getByRole("complementary")).toHaveStyle({ right: 0 });
    });
    test("aside click close sidebar", () => {
      userEvent.click(screen.getByRole("icon", { name: /close icon/ }));
      expect(screen.getByRole("complementary")).toHaveStyle({
        right: "-300px",
      });
    });
  });
});
