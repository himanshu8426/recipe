import React from 'react'
import { Card, Image, Button , Statistic, Grid } from 'semantic-ui-react'

function RecipeCard({title, image, ingredients, calories, fat, protein, url, serves }) {

    const getFullRecipe = () => {
        window.open(url, '_blank')
    }

    return (
        <Card className='recipe-card' color='orange'  raised>
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
                <Card.Description>
                    <Grid>
                        <Grid.Column width={3}>
                            <Statistic color='green' size="mini">
                                <Statistic.Value>{ingredients.length}</Statistic.Value>
                                <Statistic.Label>INGR</Statistic.Label>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Statistic color='yellow' size="mini">
                                <Statistic.Value>{`${parseInt(protein)}`}</Statistic.Value>
                                <Statistic.Label>prot</Statistic.Label>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Statistic color='orange' size="mini">
                                <Statistic.Value>{`${parseInt(fat)}`}</Statistic.Value>
                                <Statistic.Label>fat</Statistic.Label>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column width={7} size="mini">
                            <Button color='red' floated='right' onClick={getFullRecipe} inverted>
                                Full Recipe
                            </Button>    
                        </Grid.Column>
                    </Grid>                            
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default RecipeCard;
