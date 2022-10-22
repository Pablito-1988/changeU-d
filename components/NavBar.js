import {View, Image, StyleSheet} from 'react-native'
import { Link } from 'react-router-native'
import Logo from '../assets/logoApp.png'

export default function NavBar() {
    
    const style = StyleSheet.create({
        constainer: {
            paddingTop: 10,
            paddingBottom:0,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#008037'
        },
        linkButton:{
            fontSize:18,
            color: 'black',
            borderColor: 'black',
            borderRadius: 5,
            alignItems: 'center'

        },
        logo:{
            width:100,
            height:100,
            paddingBottom:0
        }
    })
  return (
        <View style={style.constainer}>
            <Image source={Logo} style={style.logo}></Image>
        </View>
  )
}

