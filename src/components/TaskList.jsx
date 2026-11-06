
import React from "react";
import { Button, Card, Badge } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "secondary";
      case "In Progress":
        return "primary";
      case "Done":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <Card className="mb-3 shadow-sm task-card" key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center flex-wrap">

            <div className="task-info">
              <div className="mb-2">
                <strong>🌷 Task:</strong> {task.name}
              </div>

              <div className="mb-2">
                <strong>💗 Priority:</strong>{" "}
                <Badge bg={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
              </div>

              <div>
                <strong>✨ Status:</strong>{" "}
                <Badge bg={getStatusColor(task.status)}>
                  {task.status}
                </Badge>
              </div>
            </div>

            <div className="task-actions d-flex gap-2">
              <Button
                variant="outline-danger"
                onClick={() => showEditForm(task)}
              >
                ✏️ Edit
              </Button>

              <Button
                variant="danger"
                onClick={() => deleteTask(task.id)}
              >
                🗑️ Delete
              </Button>
            </div>

          </Card.Body>
        </Card>
      ))}

      {tasks.length === 0 && (
        <p className="text-center text-muted">
          Belum ada tugas. Yuk tambahkan tugas baru! 🌸
        </p>
      )}

    </div>
  );
};

export default TaskList;
