import React, { useEffect, useState } from "react";
import Forms from "./components/Forms";
import ShowData from "./components/ShowData";

function App() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const response = localStorage.getItem("users");
      if (response) {
        setData(JSON.parse(response));
        setIsFetching(false);
      }
    };

    fetchData();
  }, [isFetching]);

  const clearData = () => {
    localStorage.removeItem("users");
    setData([]);
  };

  return (
    <>
      <Forms
        data={data}
        setData={setData}
        name={name}
        setName={setName}
        setIsFetching={setIsFetching}
        edit={edit}
        setEdit={setEdit}
      />
      <br />
      <button type="button" onClick={clearData}>
        Clear
      </button>
      <ShowData
        data={data}
        setData={setData}
        setName={setName}
        setEdit={setEdit}
        setIsFetching={setIsFetching}
      />
    </>
  );
}

export default App;
