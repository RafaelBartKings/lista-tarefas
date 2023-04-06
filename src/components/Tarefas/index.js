import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tarefas.css";

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={(event) => handleEdit(event, index)}
            />
            <FaWindowClose
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefa: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
