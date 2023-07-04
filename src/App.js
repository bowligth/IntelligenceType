import React, {useState} from 'react';
import './App.css';

function App() {

  const [results, setResults] = useState([]);
  const [maxQuestions, setMaxQuestions] = useState([]);

  const handleCheckboxChange = (question, value) => {
    const existingResult = results.find((result) => result.question === question);

    if (existingResult) {
      const updatedResult = {
        ...existingResult,
        points: existingResult.points + value,
      };
      const updatedResults = results.map((result) =>
        result.question === question ? updatedResult : result
      );
      setResults(updatedResults);
    } else {
      const newResult = {
        question,
        points: value,
      };
      setResults([...results, newResult]);
    }
  };

  const handleSubmit = () => {
    let maxPoints = 0;
    let maxQuestions = [];

    for (const result of results) {
      if (result.points > maxPoints) {
        maxPoints = result.points;
        maxQuestions = [result.question];
      } else if (result.points === maxPoints) {
        maxQuestions.push(result.question);
      }
    }

    setMaxQuestions(maxQuestions);
  };


  return (
    <div className="App">
      <h1>Herzlich Willkomen bei unserem Intelligenztester</h1>
      <h1>Gehen Sie durch alle 40 Aussagen durch und überlegen Sie sich, ob diese Ihnen zutrifft.</h1>
      <h1>Falls ja, markieren Sie das Kästchen mit einem Häckchen!</h1>
      <div className="question">
        <label>
          <input type="checkbox" name="Sprachliche Intelligenz" onChange={() => handleCheckboxChange('Sprachliche Intelligenz', 0)} />
          Ich habe noch nie Spass daran verspürt Bücher oder Artikel zu lesen.
        </label>
        <label>
          <input type="checkbox" name="Sprachliche Intelligenz" onChange={() => handleCheckboxChange('Sprachliche Intelligenz', 1)}/>
          Ich habe als Kind und in der Schule Bücher oder Artikel gelesen.
        </label>
        <label>
          <input type="checkbox" name="Sprachliche Intelligenz" onChange={() => handleCheckboxChange('Sprachliche Intelligenz', 3)}/>
          Ich lese ab und zu Medienberichte.
        </label>
        <label>
          <input type="checkbox" name="Sprachliche Intelligenz" onChange={() => handleCheckboxChange('Sprachliche Intelligenz', 5)}/>
          Lesen und Schreiben sind meine größten Stärken.
        </label>
        <label>
          <input type="checkbox" name="Sprachliche Intelligenz" onChange={() => handleCheckboxChange('Sprachliche Intelligenz', 8)}/>
          Ich liebe es Geschichten zu erzählen und zu schreiben.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question2" onChange={() => handleCheckboxChange('Logisch-mathematische Intelligenz', 0)} />
          Ich habe noch nie gerne Rätsel oder Denksportaufgaben gelöst.
        </label>
        <label>
          <input type="checkbox" name="question2" onChange={() => handleCheckboxChange('Logisch-mathematische Intelligenz', 1)} />
          Ich löse gelegentlich Rätsel oder Denksportaufgaben.
        </label>
        <label>
          <input type="checkbox" name="question2" onChange={() => handleCheckboxChange('Logisch-mathematische Intelligenz', 3)} />
          Ich geniesse es Rätsel und Denksport Aufgaben zu lösen.
        </label>
        <label>
          <input type="checkbox" name="question2" onChange={() => handleCheckboxChange('Logisch-mathematische Intelligenz', 5)} />
          Logisches Denken und mathematische Konzepte fallen mir leicht.
        </label>
        <label>
          <input type="checkbox" name="question2" onChange={() => handleCheckboxChange('Logisch-mathematische Intelligenz', 8)} />
          Mathematik und Logik sind meine größten Stärken.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question3" onChange={() => handleCheckboxChange('Räumliche Intelligenz', 0)} />
          Mein Orientierungsvermögen ist schlecht.
        </label>
        <label>
          <input type="checkbox" name="question3" onChange={() => handleCheckboxChange('Räumliche Intelligenz', 1)} />
          Ich kann mich gut in einem neuen grossen Raum zurechtfinden.
        </label>
        <label>
          <input type="checkbox" name="question3" onChange={() => handleCheckboxChange('Räumliche Intelligenz', 3)} />
          Ich habe ein gutes Orientierungsvermögen.
        </label>
        <label>
          <input type="checkbox" name="question3" onChange={() => handleCheckboxChange('Räumliche Intelligenz', 5)} />
          Ich interessiere mich für dreidimensionale Objekte im Raum.
        </label>
        <label>
          <input type="checkbox" name="question3" onChange={() => handleCheckboxChange('Räumliche Intelligenz', 8)} />
          Karten, Diagramme und das Vorstellen von Räumen fallen mir sehr leicht.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question4" onChange={() => handleCheckboxChange('Körperliche-kinästhetische Intelligenz', 0)} />
          Ich würde mich selbst als faul bezeichnen.
        </label>
        <label>
          <input type="checkbox" name="question4" onChange={() => handleCheckboxChange('Körperliche-kinästhetische Intelligenz', 1)} />
          Ich achte auf meine Fitness und Gesundheit.
        </label>
        <label>
          <input type="checkbox" name="question4" onChange={() => handleCheckboxChange('Körperliche-kinästhetische Intelligenz', 3)} />
          Ich betreibe regelmäßig Sport oder körperliche Aktivitäten.
        </label>
        <label>
          <input type="checkbox" name="question4" onChange={() => handleCheckboxChange('Körperliche-kinästhetische Intelligenz', 5)} />
          Fitness und Gesundheit sind ein wichtiger Teil von meinem Leben.
        </label>
        <label>
          <input type="checkbox" name="question4" onChange={() => handleCheckboxChange('Körperliche-kinästhetische Intelligenz', 8)} />
          Meine Körperbeherrschung und Feinmotorik sind außergewöhnlich.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question5" onChange={() => handleCheckboxChange('Interpersonale Intelligenz', 0)} />
          Ich arbeite lieber alleine als in Gruppen.
        </label>
        <label>
          <input type="checkbox" name="question5" onChange={() => handleCheckboxChange('Interpersonale Intelligenz', 1)} />
          Ich arbeite gerne kooperativ in Gruppen.
        </label>
        <label>
          <input type="checkbox" name="question5" onChange={() => handleCheckboxChange('Interpersonale Intelligenz', 3)} />
          Ich arbeite lieber in Gruppen als alleine.
        </label>
        <label>
          <input type="checkbox" name="question5" onChange={() => handleCheckboxChange('Interpersonale Intelligenz', 5)} />
          Ich verstehe andere gut und kann gut mit ihnen interagieren.
        </label>
        <label>
          <input type="checkbox" name="question5" onChange={() => handleCheckboxChange('Interpersonale Intelligenz', 8)} />
          Ich bin sehr gut darin, Konflikte zu lösen und andere zu verstehen.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question6" onChange={() => handleCheckboxChange('Intrapersonale Intelligenz', 0)} />
          Meine Gedanken und Emotionen sind mir egal.
        </label>
        <label>
          <input type="checkbox" name="question6" onChange={() => handleCheckboxChange('Intrapersonale Intelligenz', 1)} />
          Ich reflektiere gelegentlich über meine Gedanken und Emotionen.
        </label>
        <label>
          <input type="checkbox" name="question6" onChange={() => handleCheckboxChange('Intrapersonale Intelligenz', 3)} />
          Ich verbringe jeden Tag damit, über meine Gedanken und Emotionen nachzudenken.
        </label>
        <label>
          <input type="checkbox" name="question6" onChange={() => handleCheckboxChange('Intrapersonale Intelligenz', 5)} />
          Ich habe ein gutes Verständnis meiner Stärken und Schwächen.
        </label>
        <label>
          <input type="checkbox" name="question6" onChange={() => handleCheckboxChange('Intrapersonale Intelligenz', 8)} />
          Ich bin selbstmotiviert und kann gut unabhängig arbeiten.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question7" onChange={() => handleCheckboxChange('Natürliche Intelligenz', 0)} />
          Ich interessiere mich nicht besonders für die Natur oder verbringe ungern Zeit im Freien.
        </label>
        <label>
          <input type="checkbox" name="question7" onChange={() => handleCheckboxChange('Natürliche Intelligenz', 1)} />
          Ich verbringe gelegentlich Zeit in der Natur und habe Interesse an Umweltthemen.
        </label>
        <label>
          <input type="checkbox" name="question7" onChange={() => handleCheckboxChange('Natürliche Intelligenz', 3)} />
          Umweltschutz liegt mir am Herzen.
        </label>
        <label>
          <input type="checkbox" name="question7" onChange={() => handleCheckboxChange('Natürliche Intelligenz', 5)} />
          Ich habe ein tiefes Verständnis und Wertschätzung für die Natur.
        </label>
        <label>
          <input type="checkbox" name="question7" onChange={() => handleCheckboxChange('Natürliche Intelligenz', 8)} />
          Ich kann verschiedene Pflanzen- und Tierarten leicht identifizieren und habe eine starke Verbindung zur Natur.
        </label>
      </div>

      <div className="question">
        <label>
          <input type="checkbox" name="question8" onChange={() => handleCheckboxChange('Musikalische Intelligenz', 0)} />
          Ich habe noch nie in meinem Leben ein Instrument gespielt oder Musik gemacht.
        </label>
        <label>
          <input type="checkbox" name="question8" onChange={() => handleCheckboxChange('Musikalische Intelligenz', 1)} />
          Ich höre gelegentlich ein bisschen Musik und schätze verschiedene Musikrichtungen.
        </label>
        <label>
          <input type="checkbox" name="question8" onChange={() => handleCheckboxChange('Musikalische Intelligenz', 3)} />
          Ich habe für einige Jahre ein Instrument gespielt oder Musikunterricht genommen.
        </label>
        <label>
          <input type="checkbox" name="question8" onChange={() => handleCheckboxChange('Musikalische Intelligenz', 5)} />
          Ich war schon an mehreren Konzerten oder musikalischen Veranstaltungen.
        </label>
        <label>
          <input type="checkbox" name="question8" onChange={() => handleCheckboxChange('Musikalische Intelligenz', 8)} />
          Ich spiele schon mein Leben lang ein bestimmtes Instrument oder bin ein erfahrener Musiker.
        </label>
      </div>

      <button onClick={handleSubmit} className="submit-btn">Submit</button>

      {maxQuestions && (
        <div className="result">
          <h4>Der Intelligenztyp, welcher am ehesten zu dir passt, ist:</h4>
          <p>{maxQuestions}</p>
        </div>
      )}
    </div>
  );
}

export default App;
