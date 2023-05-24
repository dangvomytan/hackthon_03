import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function FormAdd(props) {
  const [formData, setFormData] = useState({point:0});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Truyền dữ liệu cho app
    props.handleUpdateForm({ ...formData });
  };

  console.log(111,formData);
  return (
    <>
      <Form onSubmit={handleSubmitForm}>
        <Row className="align-items-center">
          <Col className="my-1">
            <Form.Control name="id" onChange={handleOnChange} hidden />
            <Form.Control
              placeholder="Enter a player's name"
              name="userPlayer"
              onChange={handleOnChange}
            />
          </Col>

          <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default FormAdd;
