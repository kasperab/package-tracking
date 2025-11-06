import './App.css';
import TrackingData from "./components/TrackingData";
import languages from "./data/languages.json";
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <header>
        <h1>Yellow Corporation</h1>
        <h2>{languages[language].title}</h2>
      </header>
      <div className="language">
        {Object.keys(languages).map(key => (
          <label>
            <input
              type="radio"
              name="language"
              value={key}
              checked={key === language}
              onChange={() => setLanguage(key)}
            />
            {languages[key].label}
          </label>
        ))}
      </div>
      <TrackingData text={languages[language]} />
    </div>
  );
}

export default App;
