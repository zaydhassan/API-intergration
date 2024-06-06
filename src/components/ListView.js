import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const ListView = ({ items }) => (
  <List>
    {items.map(item => (
      <ListItem key={item.id}>
        <ListItemText
          primary={<Typography variant="h6">{item.title}</Typography>}
          secondary={item.body}
        />
      </ListItem>
    ))}
  </List>
);

export default ListView;
