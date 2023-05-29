import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const AddTobo = ({ valueTask, handleChangeCodone, setValueTAsk }) => {
  const dispatch = useDispatch();
  //   save data in state

  const handleAddTask = () => {
    if (valueTask.trim().length === 0) {
      alert("Enter a task before adding !!");
      setValueTAsk("");
      return;
    }
    dispatch(
      addTask({
        task: valueTask,
      })
    );
    setValueTAsk("");
  };
  return (
    <div className="pt-3 md:w-[70%] md:mx-auto">
      <TextField
        label="Add Task"
        variant="standard"
        fullWidth
        value={valueTask}
        onChange={handleChangeCodone}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleAddTask}
                color="primary"
                aria-label="add"
              >
                <AddBoxIcon className="text-mainColor text-xl" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default AddTobo;
