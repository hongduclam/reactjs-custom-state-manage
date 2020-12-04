import React from 'react'
import {Link} from 'react-router-dom'
import {Box,Container,List,ListItem,ListItemText,Paper} from '@material-ui/core'

export default function Home({componentList,...props}){
    return(
        <Box p={3}>
        <Container maxWidth={'sm'}>
            <List component={Paper}>
                {componentList && componentList.map(component=>
                    <ListItem key={component.link} button component={Link} to={component.link}>
                        <ListItemText primary={component.name} secondary={component.link}/>
                    </ListItem>
                )}
            </List>
        </Container>
        </Box>
    )
}
