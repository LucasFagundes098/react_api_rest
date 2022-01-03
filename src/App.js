import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './App/Navbar';
import api from './Services/api'

function App()  {

  const [content, setContent] = useState([]);

  useEffect(() => {
    api
    .get('')
    .then((response) => setContent(response.data))
    .catch((err) => {
      console.log('Error' + err);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Router>
      <div>
        <Navbar/> 
          <div className='content'>
            {content.map(content => (
              <div className='content-item' key={content.show.id}>
              <img src = {content.show.image.medium}></img>
                 <h3>{content.show.name}</h3>
                 <p>{content.show.status}</p>
                 <p>{content.show.language}</p>
                 <p> Rating ({content.show.rating.average})</p>
                 {console.log(content)}
              </div>
          ))}
          </div>
      </div>
    </Router>
  );
}

export default App;
