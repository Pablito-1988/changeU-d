import { createContext } from "react";
import { useState } from "react";

export const ListContext = createContext();

const { Provider } = ListContext;

const CustomComponent = ({ children }) => {
  const [list, setList] = useState([]);
  const [totalSum , setTotalSum] = useState([])
  const totalToShow = totalSum.reduce((acc , curr) => acc + curr, 0)
  let today = new Date(),
  date =  today.getDate() + '/' + (today.getMonth() + 1) ;


  const addItem = (value, motiv, ars) => {
    setList([...list, { motivo: motiv, ars: value, u$d: ars , fecha : date }]);
    setTotalSum([...totalSum , value])
  };

  const deletItem = (motiv) => {
    setList(
      list.filter((e) => {
        return e.motivo !== motiv;
      })
    );
    
  };

  const clearList = () => {
    setList([]);
    setTotalSum([])
  };



  const listContextValue = {
    list: list,
    totalToShow : totalToShow,
    addItem: addItem,
    clearList: clearList,
    deletItem: deletItem,
  };
  return <Provider value={listContextValue}>{children}</Provider>;
};
export default CustomComponent;
