import React from 'react';
import { Placeholder , Grid, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './card_placeholder.css'

function CardPlaceholder() {

    const CardPlaceholderGroup = () => (
        <Grid.Column>
                <Segment raised>
                    <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                    </Placeholder>
                </Segment>
        </Grid.Column>
    )

    return (
        <div>
            <Grid columns={4} stackable className='placeholder-card-grid'>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
                <CardPlaceholderGroup/>
            </Grid>

        </div>
    )}

export default CardPlaceholder;

