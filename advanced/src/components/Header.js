import { Container } from "react-bootstrap";

function Header(props)
{
     return(
<div className="header">
          <div className="player_total">
               <h3>player: {props.total}</h3>
               <h3>Total point: {props.player}</h3>
          </div>
          <div className="title">
               <h1>Bảng điểm</h1>
          </div>
</div>
     )

}
export default Header;