import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rocket from '../../components/Rocket';
import store from '../../redux/store';

describe('MissionsTable', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
