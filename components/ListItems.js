import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

const ListItems = ({ item }) => {
    return (

        <Grid.Column style={{ marginBottom: 20 }}>
            <Card fluid className="image-card-container">
                <Image src={item.poster_path !== null ? `http://image.tmdb.org/t/p/w300${item.poster_path}` : 'https://fakeimg.pl/300/'} /* wrapped ui={true} */ size="medium" />
                <Card.Content>
                    <Card.Header>{item.original_title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{item.release_date?.split("-")[0]}</span>
                    </Card.Meta>
                    <Card.Description className="truncate">
                        {item.overview}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <span>{item.release_date}</span>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default ListItems;
