import React, { Component } from "react";

const UserById = ({ match, content, handleEditById }) => {
  const id = match.params.id;

  const handleEdit = (e, id) => {
    // console.log(e.target.value, id);
    handleEditById(id, e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={content.store[id].name}
        onChange={e => handleEdit(e, id)}
      />
    </div>
  );
};

export default UserById;
