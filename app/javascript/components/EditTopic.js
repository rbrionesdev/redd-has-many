import React from "react"

const EditTopic = (props) => {
  const { sub, topic } = props;
  return (
    <div>
      <h1>Edit Topic</h1>
      <form action={`/subs/${sub.id}/topics`} method="post">
        <p>Name</p>
        <input defaultValue={topic.name} name="topic[name]" />
        <p>Body</p>
        <input defaultValue={topic.body} name="topic[body]" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTopic;