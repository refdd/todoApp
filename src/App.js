import React, { useState } from "react";
import AddTobo from "./components/AddTobo";
import TodoList from "./components/TodoList";
import { editTask } from "./redux/tasksSlice";
import { useDispatch } from "react-redux";
import ArchiveList from "./components/ArchiveList";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const handleChangeCodone = (event) => {
    setValue(event.target.value);
  };
  //   edit data
  const handleEdit = (id, editValue) => {
    setValue(editValue);
    if (editMode) {
      dispatch(editTask({ id: id, name: value }));
    }
    setEditMode(!editMode);
  };
  return (
    <div className="container mx-auto px-4  mt-10 md:w-[50%]  ">
      <div className="p-4 shadow-md rounded-md md:shadow-xl">
        <AddTobo
          valueTask={value}
          handleChangeCodone={handleChangeCodone}
          setValueTAsk={setValue}
        />
        <TodoList handleEdit={handleEdit} />
        <ArchiveList />
      </div>
    </div>
  );
}

export default App;
