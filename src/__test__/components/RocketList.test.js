import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketList from '../../components/RocketList';
import store from '../../redux/store';

describe('RocketsLists', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
