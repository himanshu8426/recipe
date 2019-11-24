// import React, { useState, useEffect} from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Input, Button } from 'antd';
import "antd/dist/antd.css";


function App() {

  const APP_ID = '08233a59'
  const APP_KEY = '66574bed08e91975f9a0a66ddc03dbf5'

  
  
  const [data, setData] = useState([])
  const [url, setUrl] = useState('')
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    
    axios
      .get(url)
      .then( response => {
          setData(response.data.hits)
          console.log(data)
          console.log(response)
      })
      .catch( error => {
        console.log(error)
      })

  }, [url])


  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const updateQuery = e => {
    setUrl(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    console.log(url)
    setSearch('')
  }

  return (
    <div className="App">

        <div className='search-bar'>
          <Input 
            placeholder="search recipe"
            value={search} 
            onChange={updateSearch} 
            
          ></Input>
        </div>

        <div className='search-button'>
          <Button type="primary" shape='circle-outline' icon='search' size='large' onClick={updateQuery}></Button>
        </div>

        <div>
          <ul>
            {
              data ? data.map(data => (<li>{data.recipe.calories}</li>)) : 'no data'
            }    
          </ul>
        </div>

    </div>
  );
}

export default App;