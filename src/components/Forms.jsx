import React from "react";

const Forms = ({
  data,
  setData,
  setIsFetching,
  name,
  setName,
  edit,
  setEdit,
}) => {
  const nameChangeHandler = (e) => setName(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      console.log("Please input valid name");
      setName("");
      return;
    }

    if (edit) {
      const newData = {
        id: edit,
        name: name.trim(),
      };

      for (let i = 0; i < data.length; i++) {
        if (data[i].id === newData.id) {
          data[i] = newData;
          break;
        }
      }

      setData(data);
      localStorage.setItem("users", JSON.stringify(data));
      setIsFetching(true);
      setEdit("");
      setName("");
    } else {
      const maxId = Math.max(...data.map((d) => d.id));
      const user = {
        id: data.length === 0 ? 1 : maxId + 1,
        name: name.trim(),
      };

      data.push(user);
      localStorage.setItem("users", JSON.stringify(data));
      setIsFetching(true);
      setName("");
    }
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setName("");
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={nameChangeHandler}
        value={name}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default Forms;
