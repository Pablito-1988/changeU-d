import {View, Image, StyleSheet, Text} from 'react-native'
import { Link } from 'react-router-native'
import Logo from '../assets/logo1.png'

export default function NavBar() {
    
    const style = StyleSheet.create({
        constainer: {
            alignItems:'center',
            backgroundColor: '#008037'
        },
        mainTitle: {
            fontSize: 20,
            
            marginBottom: 5,
            fontWeight: "bold",
            color:'white'
          },
        logo:{
            width:100,
            height:100,
            marginTop:10,
            marginBottom:10           
        }
    })
  return (
        <View style={style.constainer}>
            <Image source={Logo} style={style.logo}></Image>
            <Text style={style.mainTitle}>CONTROL DE GASTOS EN TAJETA</Text>
        </View>
  )
}

