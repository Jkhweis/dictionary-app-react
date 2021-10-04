import logo from "./pexelsdictionary.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header d-flex justify-content-center">
          <img
            src={logo}
            className="App-logo mt-4 mb-4 img-fluid rounded"
            alt="Dictionary logo"
            Title="Dictionary app logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="coffee" />
        </main>
        <footer className="App-footer text-center mb-6">
          <p class="text-center mt-5">
            This site was coded by Joy Khweis and it is
            <a
              href="https://github.com/Jkhweis/dictionary-app-react"
              target="_blank"
              title="Joy Khweis Github"
            >
              {" "}
              open sourced
            </a>
          </p>
          <br />
          <br />
          <br />
        </footer>
      </div>
    </div>
  );
}
