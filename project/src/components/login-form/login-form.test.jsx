import LoginForm from './login-form.jsx';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});

describe('Component Film', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('login'), 'Melissa@gmail.com');
    userEvent.type(screen.getByTestId('password'), 'HrumHrumHrum123');
    expect(screen.getByDisplayValue(/Melissa@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/HrumHrumHrum123/i)).toBeInTheDocument();
  });
});
