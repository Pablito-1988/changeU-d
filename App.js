import React , {useState,useEffect} from 'react';
import  Main  from './components/Main';
import { NativeRouter } from 'react-router-native'
import CustomComponent from './components/Context/ListContext';
import { Dimensions , SafeAreaView, ScrollView } from 'react-native';

export default function App() {
 
  

  return (
     <NativeRouter>
      <CustomComponent>
        <SafeAreaView style={{flex:1, backgroundColor: "#6AD169"}}>
          <ScrollView>
            <Main/>
          </ScrollView>   
        </SafeAreaView>
      </CustomComponent>  
    </NativeRouter>
  )
   
  
} 

