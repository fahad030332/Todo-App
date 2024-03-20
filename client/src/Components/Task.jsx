import { Box, IconButton, List, ListItem, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./TodoList";
import DeleteIcon from "@mui/icons-material/Delete";
// import Checkbox from "@mui/material";
import { updateDBPost } from "./api";
import CheckBox from "./CheckBox";
// import ReadData from "./ReadData";
import { updateDbGet } from "./api";
import { Typography, Grid, Paper, Button } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';

const Task = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState([]);
  // console.log(todos);
  // console.log(task)
  // console.log(checked)
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskId = new Date().getTime();
    const todo = { id: taskId, taask: task };

    setTodos([...todos, todo]);
    try {
      // console.log(todos);
      const response = await updateDBPost(todo);
      // console.log(response)
      setTask("");
      // setTodos([...todos,response.payload])
    } catch (error) {
      console.log("updting sheet ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = { id: "12345", endpoint: "getTask" };
        const res = await updateDbGet(queryParams);
        // console.log(res)
        setTodos(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [todos]);

  const handleDelete = async (id) => {
    try {
      // console.log(index);
      let newData = todos.filter((row) => row[0] !== id);
      setTodos(newData);
      // console.log(id);
      let res = await updateDBPost(id);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecked = (e, index) => {
    console.log(index); // Logging the index
  
    const isChecked = e.target.checked; // Get the checked status of the checkbox
  
    // Update the checked state for the specific index
    setChecked(prevState => {
      const newState = [...prevState]; // Create a copy of the previous state array  []
      newState[index] = isChecked; // Update the value at the specified index newstate[2]=true
      return newState; // Return the updated state
    });
  
    // You can perform additional actions based on the checked status if needed
    if (isChecked) {
      // Checkbox is checked
    } else {
      // Checkbox is unchecked
    }
  };
  
  //  console.log(checked)

  return (
    <>
      <Box
        paddingTop="70px"
        alignSelf="center"
        textAlign="center"
        flexDirection="column"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Add-Task"
            id="fullWidth"
            value={task}
            onChange={handleChange}
            required
            //  onChange= {(event)=>   setTask(event.target.value)}
            sx={{ width: "500px" }}
            InputProps={{
              endAdornment: (
                <IconButton aria-label="add" type="submit">
                  <AddIcon />
                </IconButton>
              ),
            }}
          />
        </form>

        <Box display="flex" justifyContent="center" flexDirection="column">
          <Grid
            container
            spacing={4}
            width={300}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            {todos.map((row, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  sx={{
                    "&:hover": {
                      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                      transform: "translateY(-5px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {/* ID: {row[0]}  */}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    𝓣𝓐𝓢𝓚: {row[1]}
                  </Typography>

                  <Button
                    variant="text"
                    color="error"
                    sx={{ mr: 1 }}
                    onClick={() => handleDelete(row[0])}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button variant="text" color="primary">
                  <EditNoteIcon/>
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    onChange={(e)=>handleChecked(e,index)}
                    sx={{ bgcolor: checked[index] ? "" : "#dae4e6" }}

                  >
                    <CheckBox />
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Task;
