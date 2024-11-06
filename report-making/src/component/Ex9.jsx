import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

export const E9 = () => {
  const books = [
    {
      title: "The Holy Bible",
      description: "Religious text of Christianity, considered sacred and canonical."
    },
    {
      title: "Quotations from Chairman Mao",
      description: "Collection of statements from speeches and writings by Mao Zedong."
    },
    {
      title: "Harry Potter series",
      description: "Fantasy novels by J.K. Rowling, following the life of a young wizard."
    },
    {
      title: "The Lord of the Rings",
      description: "High-fantasy novel written by J.R.R. Tolkien, set in Middle-earth."
    },
    {
      title: "To Kill a Mockingbird",
      description: "Novel by Harper Lee, dealing with racial injustice and moral growth."
    }
  ];

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      <List>
        { books.map((book,index) => (<>
            <ListItem key={index}>
            <ListItemText 
            primary={book.title} 
            secondary={book.description}>
            </ListItemText> 
        </ListItem>
        {index < books.length - 1 && <Divider sx ={{bgcolor:"black"}}/>}
        </>
        ))
        }
      </List>
    </div>
  );
};
