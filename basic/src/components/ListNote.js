import { Button, Container, Table } from "react-bootstrap";

function ListNote(props)
{
     return(
          <>
          <Container>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      {props.listData.map((item,index)=>{
          return(
               <tbody>
        <tr>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td>{item.content}</td>
          <td>
          <Button variant="outline-danger"onClick={()=>props.handleDeleteForm(item.id)}>Delete</Button>{' '}
          </td>
        </tr>

      </tbody>
                )
               })}
    </Table>   
          </Container>
   
          </>
     )
}
export default ListNote;