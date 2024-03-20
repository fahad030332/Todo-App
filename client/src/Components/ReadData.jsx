// import React, { useEffect, useState } from 'react'
// import { Box, Typography, Grid, Paper, Button } from '@mui/material';
// import { updateDbGet } from './api'

// export default function ReadData() {
//  const [data,setData]=useState([])

//   // useEffect(()=>{
//   //   const fetchData=async()=>{
//   //       try{
//   //           const queryParams={id:"12345",endpoint:'getTask'}
//   //           const res=await updateDbGet(queryParams)
//   //           console.log(res)
//   //           setData(res)
            
            
//   //           }
//   //           catch(error){
//   //           console.log(error)
            
//   //           }
//   //       }
//   //       fetchData();
//   //   },[])


//    const handleDelete=(id)=>{
//    const newData=data.filter((row)=> row[0]!==id)
//    setData(newData)

//    }




  








//   return (
//     <>
//     <>
      
//       <Box mt={4} mx="auto" maxWidth={800}>
//         <Grid container spacing={2}>
//           {data.map((row, index) => (
//             <Grid item xs={12} key={index}>
//               <Paper sx={{ p: 4 }}>
//                 <Typography variant="h6" gutterBottom>
//                   ID: {row[0]} 
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   TASKNAME: {row[1]} 
//                 </Typography>

//                 {/* <Typography variant="h6" gutterBottom>
//                   {row[1]} {row[2]}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   Email: {row[3]}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   Phone: {row[4]}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   Address: {row[5]}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   Education: {row[6]}
//                 </Typography> */} 
//                 <Button variant="contained" color="error" sx={{ mr: 1 }}  onClick={() => handleDelete(row[0])}>
//                   DELETE
//                 </Button>
//                 <Button variant="contained" color="primary">
//                   EDIT
//                 </Button>
//                 {/* <Button variant="contained" color="primary">
//                   SAVE
//                 </Button> */}
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//     </>
//   )
// }




// {todos.map((todo, index) => (
//   <Box
//     key={index}
//     display="flex"
//     flexDirection="column"
//     alignItems="center"
//   >
//     <List key={todo.id} sx={{ width: "500px", marginRight: "10px" }}>
//       <ListItem>{todo.taask}</ListItem>
//       <ListItem key={index}>
//         <DeleteIcon onClick={() => handleDelete(todo.id,index)} />
//         {/* <Checkbox {...label} defaultChecked size="small" /> */}
//       </ListItem>
//       <ListItem >
        
//        <CheckBox onClick={handleChecked}/> 
//       </ListItem>
//     </List>
//   </Box>
// ))}