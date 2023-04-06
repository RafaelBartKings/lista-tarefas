import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";

export default function Form({ handleChanged, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="" className="form">
      <input onChange={handleChanged} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
