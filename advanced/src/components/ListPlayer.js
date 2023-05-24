import { Button, Form, Table } from "react-bootstrap";
import "boxicons";
import { useState } from "react";

function ListPlayer(props) {

  return (
    <>
      <Table>
        <thead>

        </thead>

        {props.listData.map((item) => {
          return (
            <tbody>
              <tr>
                <td>
                    <Button  onClick={()=>props.handleDeleteForm(item.id)}>
                    <box-icon name='x'></box-icon>
                    </Button>

                </td>
                <td>
                  <box-icon type="logo" name="sketch"></box-icon>
                </td>
                <td>{item.userPlayer}</td>
                <td>
                  <div className="point_box">
                    <Button
                      variant="secondary"
                      onClick={()=>props.handleUpdatePoint(item.id,"increment")}
                    >
                      +
                    </Button>
                    <Form.Label style={{ width: "5rem" }}><h2>{item.point}</h2></Form.Label>
                    <Button variant="secondary" 
                    onClick={()=>props.handleUpdatePoint(item.id,"decrement")}
                    >-</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </>
  );
}
export default ListPlayer;
