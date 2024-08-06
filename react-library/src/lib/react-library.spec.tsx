import { render } from '@testing-library/react';

import ReactLibrary from './react-library';

describe('ReactLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
