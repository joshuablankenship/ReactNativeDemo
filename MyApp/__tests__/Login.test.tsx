// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Login from '../containers/Login';

const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  increment: jest.fn(),
  ...props,
});

describe('Test Login Screen', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  it('It should match initial snapshot', () => {
    props = createTestProps({
      counter: {
        value: 0,
        isUpdating: false,
      },
    });
    wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('It should display Login with Google button', () => {
    props = createTestProps;
    wrapper = shallow(<Login {...props} />);
    expect(wrapper.find(TouchableOpacity).render().text()).toBe(
      ' Login with Google',
    );
  });
});
