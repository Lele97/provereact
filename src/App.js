import logo from './asset/logo.svg';
import './App.css';
import Body from './Body'
import JSX from './jsx'
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <Body/>
            <JSX />
            <Footer />
        </div>
    );
}

export default App;
