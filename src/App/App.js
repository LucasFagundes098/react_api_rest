import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

function App()  {

  return (
    <Router>
      <div>
        <Navbar/> 
        <SearchBox/>
      </div>
    </Router>
  );
}

export default App;
