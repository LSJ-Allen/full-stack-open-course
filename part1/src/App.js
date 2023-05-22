import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  console.log(props);
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} old</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <h1>Greetings</h1>
      <Hello name="George" age={26+10}/>
      <Hello name="Daisy" />
    </div>
  );
}

export default App;
