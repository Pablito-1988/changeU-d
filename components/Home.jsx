import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "./Context/ListContext";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  Image,
} from "react-native";
import Delete from "../assets/Icons/delete1.png";

export default function Home() {
  const [value, setValue] = useState(0);
  const [motivo, setMotive] = useState("");
  const [showSave, setShowSave] = useState(false);
  const [ars, setArs] = useState(0);

  const { list, addItem, clearList, deletItem, totalSum, dolar } =
    useContext(ListContext);

  function arsSum(e) {
    setArs(e);
  }
  function motive(e) {
    setMotive(e);
  }
  function calculate() {
    const array = Array.from(dolar);
    array.map((e, i) => {
      e === "," ? array.splice(i, 1, ".") : null;
    });
    const string = array.join("");
    const round = Number(string);
    setValue(ars * round);
    setShowSave(true);
  }
  function save() {
    addItem(value.toFixed(2), motivo, Number(ars));
    setValue(0);
    setMotive("");
    setShowSave(false);
  }

  const style = StyleSheet.create({
    homeContainer: {
      alignItems: "center",
      backgroundColor: "#6AD169",
    },
    mainTitle: {
      fontSize: 20,
      paddingTop: 15,
      marginBottom: 15,
      fontWeight: "bold",
      /* color:'white' */
    },
    inputTitle:{
        fontSize: 19,
      paddingTop: 10,
      /* marginBottom: 5, */
      fontWeight: "bold",
    },
    input: {
      width: 300,
      height: 50,
      borderStyle: "solid",
      fontSize: 20,
      backgroundColor: "white",
      marginBottom: 35,
      marginTop: 10,
      textAlign: "center",
      borderRadius: 5,
      
    },
    inputNumber:{
        width: 200,
        height: 50,
        borderStyle: "solid",
        fontSize: 20,
        backgroundColor: "white",
        marginBottom: 15,
        marginTop: 10,
        textAlign: "center",
        borderRadius: 5,},

    listContainer: {
      flexDirection: "row",
      marginBottom: 5,
      paddingHorizontal:10,
      justifyContent:'space-around',
      alignItems: "center",
      borderBottomColor:'black',
      borderBottomWidth:1 
    },
    buttonStyle: {
      width:100,
      height: 40,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    innerButtonStyle: {
      color: "white",
    },
    separator: {
      marginTop: 5,
      marginBottom: 5,
    },
    deleteIcon: {
      height: 30,
      width: 30,
      /* backgroundColor:'red', */
      borderRadius:5
    },
    listWrapper: {
      width: 400,
      marginHorizontal:10,
      backgroundColor: "white",
      borderRadius: 5,
      marginTop: 30,
      alignItems: "center",
      marginBottom:30,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    tabletext:{
        width:100,
        fontSize:18
    },
    tableTitle:{
        width:100,
        fontSize:19,
        marginTop:5
    }
  });
  return (
    <View style={style.homeContainer}>
      {/* <Text style={style.mainTitle}>CONTROL DE GASTOS EN TARJETA</Text> */}
       {/* <Text style={{fontSize: 16, marginTop:10}}>Valor dolar: u$d {dolar}</Text> */}
      <Text style={style.inputTitle}>Agregar un motivo</Text>
      <TextInput
        style={style.input}
        placeholder="Ej. ropa"
        onChangeText={motive}
      ></TextInput>
      <Text style={style.inputTitle}>Agregar un monto</Text>
      <Text style={{fontSize: 16, marginTop:10}}>Valor dolar actualizado : u$d {dolar}</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Ej. 50"
        value={ars}
        onChangeText={arsSum}
        style={style.inputNumber}
      ></TextInput>
      <Button title="Calcular" onPress={calculate}></Button>
      {value > 0 || list.length > 0 ? (
        <Text style={style.mainTitle}>En pesos es: ${value.toFixed(2)}</Text>
      ) : null}
      {showSave && (
        <>
          <Button title="Guardar gasto" onPress={save}></Button>
          <Text style={style.separator}></Text>
        </>
      )}
      {list.length > 0 && (
        <Button
          title="Borrar todo"
          color={"red"}
          onPress={() => clearList()}
        ></Button>
      )}

      <View style={style.listWrapper}>
        {list.length > 0 && (
          <View style={style.listContainer}>
            <Text style={style.tableTitle}>Fecha</Text>
            <Text style={style.tableTitle}>Motivo</Text>
            <Text style={style.tableTitle}> Pesos</Text>
            <Text style={style.tableTitle}></Text>
          </View>
        )}

        {list.length > 0
          ? list.map((element, index) => {
              return (
                <View key={index} style={style.listContainer}>
                  <Text style={style.tabletext}>{element.fecha}</Text>
                  <Text style={style.tabletext}>{element.motivo}</Text>
                  <Text style={style.tabletext}> ${element.ars}</Text>
                  <Pressable
                    style={style.buttonStyle}
                    onPress={() => deletItem(element.motivo , element.ars)}
                  >
                    <Image style={style.deleteIcon} source={Delete} />
                  </Pressable>
                </View>
              );
            })
          : null}
         {list.length > 0 && <Text style={style.mainTitle}>El total en pesos es ${totalSum.toFixed(2)}</Text>} 
      </View>
      {list.length === 0 && (
        <View>
          <Text>No hay elementos para mostrar</Text>
        </View>
      )}
       
    </View>
  );
}
