import logo from './pexelsdictionary.jpeg';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <header className="App-header d-flex justify-content-center">
          <img
            src={logo}
            className="App-logo mt-4 mb-3 img-fluid rounded"
            alt="Dictionary App"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center mb-6">
          <p className="text-center mt-5">
            This site was coded by Joy Khweis and it is
            <a
              href="https://github.com/Jkhweis/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
              title="Joy Khweis Github Link"
            >
              {' '}
              open sourced
            </a>
          </p>
          <p className="text-center mt-3">
            View my portfolio
            <a
              href="https://unruffled-spence-b7412b.netlify.app/index.html"
              target="_blank"
              rel="noreferrer"
              title="Joy Khweis Portfolio Link"
            >
              {' '}
              here
            </a>
          </p>
        </footer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
