import NotFound from './not-found.jsx';
import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('Component NotFound', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );
    const headerElement = getByText('404 Not Found');
    expect(headerElement).toBeInTheDocument();
  });
});
