import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import App from '../App';
import Calculator from '../components/Calculator';
import Header from '../components/Header';
import Home from '../components/Home';
import Quotes from '../components/Quotes';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('renders App correctly', () => {
    const tree = TestRenderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Calculator correctly', () => {
    const tree = TestRenderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Header correctly', () => {
    const tree = TestRenderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Home correctly', () => {
    const tree = TestRenderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quotes correctly', () => {
    const tree = TestRenderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
