import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Quotes from './components/Quotes';
import CalcSection from './components/CalcSection';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CalcSection />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
