import React from 'react'
import { Card, Col } from 'antd'
import { Popover, Button } from 'antd'
import "antd/dist/antd.css"


function RecipeCard({title, image, ingredients }) {
    return (

            <Col span={6}>
                <div style={{ padding: '30px' }}>

                
                    <Card title={title} bordered={false} style={{ width: 300 }}>

                    <img src={image} alt='a' height='200px' width='200px'></img>

                    <Popover 
                        content={<ul>{
                            ingredients.map(
                                ingredient => (
                                    <li>{ingredient.text}</li>
                            ))
                            }
                        </ul>} 
                        
                        title={`${ingredients.length} ingredients`}
                    >
                        <Button>Ingredients</Button>
                    </Popover>

                    {/* <ul>
                        {
                            ingredients.map(
                                ingredient => (
                                    <li>{ingredient.text}</li>
                            ))
                        }
                    </ul> */}

                    
                    </Card>
                </div>
            
            </Col>
    )
}

export default RecipeCard;
