// import React, { useState, useEffect} from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Input, Tag, Row } from 'antd';
import "antd/dist/antd.css";
import RecipeCard from './recipe_card'

function App() {

  const APP_ID = '08233a59'
  const APP_KEY = '66574bed08e91975f9a0a66ddc03dbf5'

  
  
  const [data, setData] = useState([])
  const [url, setUrl] = useState('')
  const [search, setSearch] = useState('')
  const [keyword, setKeyword] = useState([])

  
  const updateKeyword = e => {
    setKeyword([...keyword, e])
  }


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
    
    console.log(url)
    updateKeyword(search)
    console.log(keyword)
    setSearch('')
    setUrl(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  }

  return (
    <div className="App">
      

        <div className='search-bar'>
          <Input.Search 
            placeholder="search recipe"
            value={search} 
            onChange={updateSearch} 
            onPressEnter={updateQuery}
            autoFocus
          ></Input.Search>
        </div>
        <div className='keyword'>
          {
            keyword ? <div>{
              keyword.map(
                item => (
                  <Tag closable color="volcano">{item}</Tag>
                  )
                )}
            </div> : ''
          }
        </div>
        

        {
          data ? <Row>{
            
            data.map(
              dataItem => (
                <RecipeCard title={dataItem.recipe.label} image={dataItem.recipe.image} ingredients={dataItem.recipe.ingredients} />
                )
              )  
          }
          </Row> : <div className="background"></div>
        } 
        {/* <Row>
          {
            data ? data.map(
              dataItem => (
                <RecipeCard title={dataItem.recipe.label} image={dataItem.recipe.image} ingredients={dataItem.recipe.ingredients} />
              )
            )
            : ''
          }          
        </Row> */}

        

    </div>
  );
}

export default App;