import { render } from 'tests';
import { user } from 'tests/mocks/user';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  test('renders image when avatar field is present', () => {
    const { getByAltText } = render(<Avatar size={24} user={user} />);
    const image = getByAltText(user.username);
    expect(image).toHaveAttribute('src', user.avatar);
    expect(image).toBeInTheDocument();
  });
  test('renders gravatar image when avatar field is not present', () => {
    const { getByAltText } = render(<Avatar size={24} user={{ ...user, avatar: undefined }} />);
    const image = getByAltText(user.username);
    // eslint-disable-next-line jest-dom/prefer-to-have-attribute
    expect(image.getAttribute('src')).toMatch(/https:\/\/www.gravatar.com\//);
    expect(image).toBeInTheDocument();
  });
  test('renders label', () => {
    const { getByText } = render(<Avatar size={24} user={user} />);
    const label = getByText(user.username);
    expect(label).toBeInTheDocument();
  });
});
