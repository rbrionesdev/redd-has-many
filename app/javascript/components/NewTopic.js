import React from "react"

const NewTopic = (props) => {
  const { subYo } = props;
  return (
    <div>
      <h1>New Topic</h1>
      <form action={`/subs/${subYo.id}/topics`} method="post">
        <p>Name</p>
        <input name="topic[name]"/>
        <p>Body</p>
        <input name="topic[body]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewTopic;