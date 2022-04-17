/* eslint-disable no-unused-vars */
import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import format from './utils/format';

jest.setTimeout(10000);

describe('format(number)', () => {
  it('should format milions', async () => {
    expect(format(23300000)).toEqual('23.30M');
    expect(format(1050000)).toEqual('1.05M');
    expect(format(300000)).not.toEqual('0.30M');
  });
  it('should format thousands', async () => {
    expect(format(23300)).toEqual('23.30K');
    expect(format(1050)).toEqual('1.05K');
    expect(format(300)).not.toEqual('0.30K');
  });
});
describe('testing react components using react test', () => {
  it('two minus eight should return -6. ', async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>,
    );
    await waitFor(() => screen.getByText('Albania'), { timeout: 10000 });
    expect(screen.getByText('Albania')).not.toBeNull();
  });
});
