import { useState } from "react";
import "./App.css";
import FormUpadate from "./components/FormUpadte";
import Header from "./components/Header";
import ListNote from "./components/ListNote";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listData, setListData] = useState([]);
  const handleUpdateForm = (data) => {
    if (!data.id) {
      // id undefined
      data.id = listData.length ? listData[listData.length - 1].id + 1 : 1;
      if (listData.length) {
        // listdata.length > 0
        return setListData([...listData, data]);
      }
      setListData([data]);
    }
  };
  //Xử lý delete
  const handleDeleteForm = (id) => {
    console.log(id);
    const newList = listData.filter((data) => data.id !== id);
    setListData(newList);
  };
  // console.log(listData,333);
  return (
    <>
      <Header />
      <ListNote listData={listData} handleDeleteForm={handleDeleteForm} />
      <FormUpadate handleUpdateForm={handleUpdateForm} />
    </>
  );
}

export default App;
