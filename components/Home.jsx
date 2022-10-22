import React, { useState , useContext} from "react";
import { ListContext } from "./Context/ListContext";
import { View, Text, TextInput, StyleSheet, Button , Pressable } from "react-native";

export default function Home() {
  const [db, setDb] = useState([]);
  const [value, setValue] = useState(0);
  const [motivo, setMotive] = useState("");
  const [showSave , setShowSave] = useState(false)
  const [ars, setArs] = useState(0);

  const {list, addItem , clearList , deletItem, totalToShow} = useContext(ListContext)

  function arsSum(e) {
    setArs(e);
  }
  function motive(e) {
    setMotive(e);
  }

  function calculate() {
    setValue(ars * 300)
    setShowSave(true);
  }
  function save() {
    addItem(value , motivo , Number(ars))
    setValue(0);
    setMotive("");
    setShowSave(false)
  }


  const style = StyleSheet.create({
    homeContainer: {
      alignItems: "center",
      backgroundColor: "#6AD169",
    },
    mainTitle: {
      fontSize: 20,
      paddingTop: 15,
      marginBottom:15,
      fontWeight:'bold'
    },
    input: {
      width: 400,
      height: 50,
      borderStyle: "solid",
      fontSize: 20,
      backgroundColor:'white',
      marginBottom: 15,
      marginTop:10,
      textAlign:'center',
      borderRadius:5
    },
    listContainer: {
      flexDirection: "row",
      marginBottom: 10,
      marginTop:30,
      justifyContent: "space-between",
      width: 400,
      padding:5,
      backgroundColor:'white',
      borderRadius:5
    },
    buttonStyle: {
        width:75,
        height:50,
        backgroundColor:'red',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    innerButtonStyle:{
        color:'white'
    },
    separator:{
        marginTop:5,
        marginBottom:5
    }
    
  });
  return (
    <View style={style.homeContainer}>
      <Text style={style.mainTitle}>CONTROL DE GASTOS EN TARJETA</Text>
      {totalToShow>0 && <Text style={style.mainTitle}>El total en pesos es ${totalToShow}</Text>}
      <TextInput style={style.input} placeholder="Agrega un motivo" onChangeText={motive}></TextInput>
      <TextInput
        keyboardType="numeric"
        placeholder="Agrega un monto"
        value={ars}
        onChangeText={arsSum}
        style={style.input}
      ></TextInput>
      <Button  title="Calcular" onPress={calculate}></Button>
      <Text style={style.mainTitle}>En pesos es: ${value}</Text>
      {showSave && <> 
            <Button  title="Guardar gasto" onPress={save}></Button> 
            <Text style={style.separator}></Text>
            </>}
      {list.length>0 && <Button title="Borrar todo" color={'red'} onPress={() => clearList()}></Button>}
      

      {list.length > 0
        ? list.map((element, index) => {
            return (
              
                <View key={index} style={style.listContainer}>
                  <Text  style={style.mainTitle}>{element.fecha}</Text>  
                  <Text style={style.mainTitle}>{element.motivo}</Text>
                  <Text style={style.mainTitle}> ${element.ars}</Text>
                  <Pressable style={style.buttonStyle}  onPress={()=> deletItem(element.motivo)}><Text style={style.innerButtonStyle}>Eliminar</Text></Pressable>
                </View>
              
            );
          })
        : <Text>No hay elementos para mostrar</Text>}
    </View>
  );
}
