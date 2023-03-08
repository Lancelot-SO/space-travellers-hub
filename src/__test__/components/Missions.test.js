import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../../components/Missions';
import store from '../../redux/store';

describe('Missions', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
