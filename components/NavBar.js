import {View, Text, StyleSheet} from 'react-native'
import { Link } from 'react-router-native'

export default function NavBar() {
    console.log('hola estoy por aca')
    const style = StyleSheet.create({
        constainer: {
            paddingTop: 50,
            paddingBottom:20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#999'
        },
        linkButton:{
            fontSize:18,
            color: 'black',
            borderColor: 'black',
            borderRadius: 5,
            alignItems: 'center'

        }
    })
  return (
        <View style={style.constainer}>
           <Link to='/' style={style.linkButton} >
            <Text title='Home'>Home</Text>
           </Link>
           <Link to='/login' style={style.linkButton}>
            <Text title='Login' >Login</Text >
           </Link>
           

        </View>
  )
}

