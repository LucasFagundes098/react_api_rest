import React from 'react';
import { useState, useEffect} from 'react';
import api from '../Services/api';

function SearchBox() {

    const [searchTerm, setSearchTerm] = useState([]);
    const [content, setContent] = useState([]);

      useEffect(() => {
        api
        .get('searchTerm'.value)
        .then((response) => setContent(response.data))
        .catch((err) => {
          console.log('Error' + err);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = content.filter((value) => {
            return value.show.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord == '') {
            setSearchTerm([]);
        } else {
            setSearchTerm(newFilter);
        }
    };

    return (
        <div className='search-bar'>
            <input type='text' placeholder='search...' onChange={handleFilter}/>

            <div className='dataResult'>
                 {searchTerm.map((value) => {
                     if(value.show.image == null){
                         return(
                             <div className='dataResult-item' key={value.show.id}>
                                <img src = {value.show.image}></img>
                                <p>{value.show.name}</p>
                                <p>{value.show.status}</p>
                                <p>{value.show.language}</p> 
                             </div>
                         )
                     } else {
                        return (
                        <div className='dataResult-item' key={value.show.id}>
                            <img src = {value.show.image.medium}></img>
                            <h4>{value.show.name}</h4>
                            <p>{value.show.status}</p>
                            <p>{value.show.language}</p> 
                        </div>
                    )
                     }  
                })} 
            </div>
        </div>
    )
}

export default SearchBox;
