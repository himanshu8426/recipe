// import React, { useState, useEffect} from 'react';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Input, Tag, Row } from 'antd';
import RecipeCard from './recipe_card'
import { Card, Pagination } from 'semantic-ui-react'

import './App.css';
import "antd/dist/antd.css";
import 'semantic-ui-css/semantic.min.css'

function App() {

  const APP_ID = '08233a59'
  const APP_KEY = '66574bed08e91975f9a0a66ddc03dbf5'  
  
  const [data, setData] = useState([])
  const [url, setUrl] = useState('')
  const [search, setSearch] = useState('')
  const [keyword, setKeyword] = useState([])
  const [loading, setLoading] = useState(false)
  
  const updateKeyword = e => {
    setKeyword([...keyword, e])
  }

  useEffect(() => {    

    setLoading(true)

    axios
      .get(url)
      .then( response => {
          setLoading(false)
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
    setUrl(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`)
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
            loading={loading}
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
          data ? <Card.Group itemsPerRow={3} className='card-group'>{
            
            data.map(
              dataItem => (
                <RecipeCard 
                  title={dataItem.recipe.label} 
                  image={dataItem.recipe.image}
                  ingredients={dataItem.recipe.ingredients}
                  calories={dataItem.recipe.calories}
                  fat={dataItem.recipe.totalNutrients.FAT.quantity}
                  carbs={dataItem.recipe.totalNutrients.PROCNT.quantity}
                  protein={dataItem.recipe.totalNutrients.CHOCDF.quantity}
                  />
                )
              )  
          }
          </Card.Group> : <div className="background"></div>
        } 

        {
          data ? <Pagination defaultActivePage={1} totalPages={10} className="pagination"/> : ''
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