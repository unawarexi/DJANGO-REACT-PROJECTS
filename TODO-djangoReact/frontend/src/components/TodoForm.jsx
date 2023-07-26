import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TodoForm = () => {
    const [Name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);

    };

  return (
    <div>
      <Form>
        <InputGroup className="mb-4">

          <FormControl placeholder="New Todo"
          onChange={handleChange}
          value={Name}
          />

          <button type="submit" className=" bg-red-600 p-3 text-white font-semibold rounded-md">Add</button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default TodoForm;
