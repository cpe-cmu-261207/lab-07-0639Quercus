import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [onHover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
    >
      <span
        style={props.mark ? { textDecoration: "line-through" } : null}
        className="me-auto"
      >
        {props.desc}
      </span>

      {onHover && (
        <button onClick={() => props.toMark()} className="btn btn-success">
          <IconCheck />
        </button>
      )}
      {onHover && (
        <button onClick={() => props.toMoveUp()} className="btn btn-secondary">
          <IconArrowUp />
        </button>
      )}
      {onHover && (
        <button
          onClick={() => props.toMoveDown()}
          className="btn btn-secondary"
        >
          <IconArrowDown />
        </button>
      )}
      {onHover && (
        <button onClick={() => props.onDelete()} className="btn btn-danger">
          <IconTrash />
        </button>
      )}
    </div>
  );
}
