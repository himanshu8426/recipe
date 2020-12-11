import React from 'react';
import { Placeholder , Grid, Segment } from 'semantic-ui-react'

function CardPlaceholder() {

    const CardPlaceholderGroup = () => (
        <Grid.Column>
                <Segment raised style={{boxShadow: "20px 20px 50px #00d2c6, -30px -30px 60px #00ffff", margin: "0.5rem"}}>
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
            <Grid columns={4} stackable style={{margin: "0rem !important", background: "white"}}>
                {[...Array(30)].map((x, i) =>
                    <CardPlaceholderGroup key={i} />
                )}
              </Grid>
        </div>
    )}

export default CardPlaceholder;
