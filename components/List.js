import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import ListItem from './ListItems';


const List = ({ results, loading }) => {

    return (
        <Grid columns={3} >
            <Grid.Row className="flex flex-row justify-center">
                {results[0] && <h1 className="py-24">Results</h1>}
            </Grid.Row>
            {loading ? <h1>loading...</h1> :
                <Grid.Row>
                    {results[0] && results[0].map(item => (
                        <ListItem key={item.id} item={item} />
                    ))}
                </Grid.Row>}
        </Grid >
    );

}

export default List;
