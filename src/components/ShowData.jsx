import React from "react";

const ShowData = ({ data, setData, setName, setEdit, setIsFetching }) => {
  const editHandler = (d) => {
    setEdit(d.id);
    setName(d.name);
  };

  const deleteHandler = (id) => {
    const userData = data.filter((item) => {
      return item.id !== id;
    });

    localStorage.setItem("users", JSON.stringify(userData));
    setData(userData);
    setIsFetching(true);
  };
  return (
    <div>
      {data.map((d, i) => {
        return (
          <div key={i}>
            <div className="row">
              <div className="col-md-6">
                <strong>{d.name}</strong>
              </div>
              <button type="button" onClick={() => editHandler(d)}>
                Edit
              </button>
              <button type="button" onClick={() => deleteHandler(d.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowData;
