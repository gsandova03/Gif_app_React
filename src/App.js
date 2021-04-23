import React, {useState} from 'react';
import './App.css';
import ListOfGif from './components/ListOfGifs';

import { Route, Link} from 'wouter';

function App() {

  const [keyword, updateKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
         {/* <button onClick={() => updateKeyword('anime')}>Cambiar keyword</button> */}
         {/* <ListOfGif keyword={keyword}/> */}
         <div className="header">
          <h1>Mi App de Gifs</h1>
          <ul className="links">
            <li><Link to='/gif/spiderman'>Gif de SpiderMan</Link></li>
            <li><Link to='/gif/colombia'>Gif de Colombia</Link></li>
            <li><Link to='/gif/morty'>Gif de Morty</Link></li>
            <li><Link to='/gif/matrix'>Gif de Matrix</Link></li>
          </ul>
         </div>
         <div className="container_gifs">
          <Route 
            component={ListOfGif}
            path="/gif/:keyword"
          />
         </div>

      </section>
    </div>
  );
}

export default App;
