import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAdd from "./components/FormAdd";
import ListPlayer from "./components/ListPlayer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [listData, setListData] = useState([]);
  const [total, setTotal] = useState(0);
  const [player, setPlayer] = useState(0);

  const handleUpdateForm = (data) => {
    // console.log("data",data);
    // Tạo  mới dữ liệu (kiểm tra giá trị từ form)
    if (!data.Id) {
      // id undefined
      data.id = listData.length ? listData[listData.length - 1].id + 1 : 1;
      if (listData.length) {
        // listdata.length > 0
        return setListData([...listData, data]);
      }
      setListData([data]);
    }
    function handleTotal() {
      return;
    }
  };
  //Xử lý delete
  const handleDeleteForm = (id) => {
    const newList = listData.filter((data) => data.id !== id);
    setListData(newList);
  };
  //
  const handleUpdatePoint = (id, type) => {
    if (type === "increment") {
      const newData = listData.map((item) => {
        if (item.id === id) {
          item.point++;
        }
        return item;
      });
      setListData(newData);
    } else if (type === "decrement") {
      const newData = listData.map((item) => {
        if (item.id === id) {
          if (item.point > 0) {
            item.point--;
          }
        }
        return item;
      });
      setListData(newData);
    }
  };

  useEffect(() => {
    setPlayer(listData.length);
  }, [listData]);

  // useEffect(() => {
  //   listData.map((item) => 
  //   {
  //     setPlayer(player+item.point);
  //   }
  // }, [listData]);
  return (
    <Container className="contai">
      <Header player={player} />
      <ListPlayer
        listData={listData}
        handleDeleteForm={handleDeleteForm}
        handleUpdatePoint={handleUpdatePoint}
      />
      <FormAdd handleUpdateForm={handleUpdateForm} />
    </Container>
  );
}

export default App;
