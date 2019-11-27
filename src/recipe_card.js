import React from 'react'
import { Popover } from 'antd'
import "antd/dist/antd.css"

import { Card, Image, Button , Statistic, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './recipe_card.css';



function RecipeCard({title, image, ingredients, calories, fat, protein, url, serves }) {

    const getFullRecipe = () => {
        window.open(url, '_blank')
    }

    return (
            
            // <Card className='recipe-card' color='orange'  raised={true} href={url} target="_blank">
            <Card className='recipe-card' color='orange'  raised={true}>

                <Card.Content>
                    <Image 
                        className="recipe-image"
                        src={image}
                        size='tiny'
                        floated='right'
                    />
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{`${parseInt(calories)} calories`}</Card.Meta>
                    <Card.Description>{`serves ${serves} people`}</Card.Description>
                    
                </Card.Content>

                <Card.Content extra>
                    {/* <Card.Description>
                        {   
                             ingredients.map(
                                 ingredient => (
                                     <li>{ingredient.text}</li>
                             ))
                        
                        }
                    </Card.Description> */}
                    
                    <Card.Description>


                        <Button color='red' floated='right' onClick={getFullRecipe} inverted>
                            Full Recipe
                        </Button>
                        
                        
                        <Statistic.Group size='mini'>
                            
                            <Statistic color='green'>
                                <Statistic.Value>{ingredients.length}</Statistic.Value>
                                <Statistic.Label>INGR</Statistic.Label>
                            </Statistic>
                        
                            <Statistic color='orange'>
                                <Statistic.Value>{`${parseInt(fat)}`}</Statistic.Value>
                                <Statistic.Label>fat</Statistic.Label>
                            </Statistic>

                            <Statistic color='yellow'>
                                <Statistic.Value>{`${parseInt(protein)}`}</Statistic.Value>
                                <Statistic.Label>prot</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Card.Description>
                </Card.Content>

                
            </Card>

            // <Col span={6}>
            //     <div style={{ padding: '30px' }}>

                
            //         <Card title={title} bordered={false} style={{ width: 300 }}>

            //         <img src={image} alt='a' height='200px' width='200px'></img>

            //         <Popover 
            //             content={<ul>{
            //                 ingredients.map(
            //                     ingredient => (
            //                         <li>{ingredient.text}</li>
            //                 ))
            //                 }
            //             </ul>} 
                        
            //             title={`${ingredients.length} ingredients`}
            //         >
            //             <Button>Ingredients</Button>
            //         </Popover>

            //         {/* <ul>
            //             {
            //                 ingredients.map(
            //                     ingredient => (
            //                         <li>{ingredient.text}</li>
            //                 ))
            //             }
            //         </ul> */}

                    
            //         </Card>
            //     </div>
            
            // </Col>
    )
}

export default RecipeCard;
