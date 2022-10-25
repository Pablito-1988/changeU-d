import { createContext, useEffect } from "react";
import { useState } from "react";

export const ListContext = createContext();

const { Provider } = ListContext;

const CustomComponent = ({ children }) => {
  const [list, setList] = useState([]);
  const [totalSum , setTotalSum] = useState(0)
  const [dolar, setDolar]= useState(0)
  let today = new Date(),
  date =  today.getDate() + '/' + (today.getMonth() + 1) 
  

  const addItem = (value, motiv, ars) => {
    setList([...list, { motivo: motiv, ars: value, u$d: ars , fecha : date }]);
    setTotalSum(totalSum + Number(value)) 
    
  };

  const deletItem = (motiv , ars) => {
    setList(
      list.filter((e) => {
        return e.motivo !== motiv;
      })
    );
    setTotalSum(totalSum - Number(ars))
    
  };

  const clearList = () => {
    setList([]);
    setTotalSum(0)
  };

  useEffect(()=>{
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => response.json()
    )
      .then(data => {

        console.log('se actualizo valor dolar')
        setDolar(data[6].casa.venta)
      }
        );
  },[])

 

  const listContextValue = {
    list: list,
    totalSum : totalSum,
    addItem: addItem,
    clearList: clearList,
    deletItem: deletItem,
    dolar: dolar
  };
  return <Provider value={listContextValue}>{children}</Provider>;
};
export default CustomComponent;
