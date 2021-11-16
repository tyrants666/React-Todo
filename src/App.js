// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // const x = true;

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Tasks />
        {/* <h1>{x ? "Akash" : "Yadav"}</h1> */}
      </div>
    </div>
  );
}

export default App;
