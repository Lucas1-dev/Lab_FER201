import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Main from './Components/Films/Main';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer/>

    </div>
  );
}

export default App;
