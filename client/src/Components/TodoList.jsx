import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';



export default function TodoList({todos,setData}) {
  console.log(todos)
  const handleDelete=(index)=>{
  let newData=todos.filter((_,i)=>i!==index)
  console.log(index)
  setData(newData)
  }
  
  return (
   <>
   <Box>
  {todos.map((todo)=>(
   <List key={todo}>
    <ListItem>
      {todo}
      <DeleteIcon onClick={(index)=> handleDelete(index) }/>
    </ListItem>
   </List> 
   

  ))}
   </Box>
   </> 
  );
}


// <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
    //   <FormGroup row>
    //     <FormControlLabel
    //       control={
    //         <Checkbox
    //           // checked={}
    //           // onChange={(event) => setDense(event.target.checked)}
    //         />
    //       }
    //       label="Enable dense"
    //     />
    //     <FormControlLabel
    //       control={
    //         <Checkbox
    //           // checked={secondary}
    //           // onChange={(event) => setSecondary(event.target.checked)}
    //         />
    //       }
    //       label="Enable secondary text"
    //     />
    //   </FormGroup>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography> */}
          
            {/* <List>
              
                <ListItem>
                  <ListItemText
                    // primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
            
            </List>
          
        </Grid> */}
        {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography> */}
          
            {/* <List>
              
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    // primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>, */}
              
            {/* </List>
          
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
          
            <List>
              
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    // primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              
            </List>
      
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          
            <List >
              
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    // primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              
            </List>
    
        </Grid>
      </Grid>
    </Box> */}