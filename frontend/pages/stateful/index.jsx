import React, { useState } from "react";

import TaskList from "../../components/stateful/TaskList";

export default function Solution() {
  // eslint-disable-next-line no-unused-vars
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className="page-container">
      <TaskList tasksList={tasksList} />
    </div>
  );
}
