import { render } from 'tests';

import { EntryThumbnail } from './EntryThumbnail';

describe('EntryThumbnail', () => {
  test('renders image when src prop provided', () => {
    const src = 'graphics/image.jpg';
    const { getByAltText } = render(<EntryThumbnail src={src} alt="Entry image" />);
    const image = getByAltText('Entry image');
    expect(image).toHaveAttribute('src', src);
    expect(image).toBeInTheDocument();
  });
  test('renders placeholder when src prop not provided', () => {
    const { getByTestId } = render(<EntryThumbnail alt="Entry image" />);
    const placeholder = getByTestId('entry-thumb-placeholder');
    expect(placeholder).toBeInTheDocument();
  });
});
