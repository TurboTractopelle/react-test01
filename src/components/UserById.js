import React, { Component } from "react";

const UserById = ({ match, content, handleEditById }) => {
  const id = match.params.id;

  const handleEdit = (e, id) => {
    handleEditById(id, e.target.value);
  };

  return (
    <section>
      <p>Edit the profile</p>
      <input
        type="text"
        value={content.store[id].name}
        onChange={e => handleEdit(e, id)}
      />
    </section>
  );
};

export default UserById;
