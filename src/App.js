import './App.css';
import map from './images/revised.png'
import Answer from './views/Answer.js'

function App() {


  return (
    <div className="App">

      <section  className='hippo'>
        <img src={map} alt='map'></img>
      </section>
      <div className='right-side'>
        <h1>Welcome to Geolocation Services <br/><br/> <h6>Warning: Will automatically copy results to your cliboard (Crlt+C) </h6></h1>
        <Answer />
      </div>
    </div>
  );
}

export default App;
