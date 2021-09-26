import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { store } from '../../../app/store';
import { DailyList } from './DailyList';

describe("DailyList component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <DailyList></DailyList>
      </Provider>
    );
  });
  test("should render the items from the mock api", async () => {
    expect(await screen.findAllByText("test")).toHaveLength(2);
  });
});
