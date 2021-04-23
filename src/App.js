import React, {useState} from 'react';
import './App.css';
import ListOfGif from './components/ListOfGifs';

function App() {

  const [keyword, updateKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
         <button onClick={() => updateKeyword('anime')}>Cambiar keyword</button>
         <ListOfGif keyword={keyword}/>
         
      </section>
    </div>
  );
}

export default App;
