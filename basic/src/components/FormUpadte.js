import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function FormUpadate(props) {
  const [formData, setFormData] = useState({});

  // function lấy giá trị  nhập vào
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Truyền dữ liệu cho app
    props.handleUpdateForm({ ...formData });

    // Xóa dữ liệu form
  };
  console.log(formData);
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Form onSubmit={handleSubmitForm}>
          <Modal.Body>
            <Form.Control type="text" name="id"
          onChange={handleOnChange}
             hidden
              />
            <Form.Control
              className="title_form"
              type="text"
              placeholder="Title"
              style={{ border: "none" }}
              name="title"
              onChange={handleOnChange}
            />
            <Form.Control
              className="title_form"
              as="textarea"
              placeholder="Take a note ..."
              style={{ height: "100px", border: "none" }}
              name="content"
              onChange={handleOnChange}
            />
            <Button variant="warning" id="btn_add" type="submit">
              +
            </Button>
          </Modal.Body>
        </Form>
      </Modal.Dialog>
    </div>
  );
}
export default FormUpadate;
