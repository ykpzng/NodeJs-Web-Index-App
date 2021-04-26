import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/HomePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
