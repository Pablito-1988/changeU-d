import React from 'react';
import  Main  from './components/Main';
import { NativeRouter } from 'react-router-native'

export default function App() {
  console.log('hola hola')
  return (
     <NativeRouter>
        <Main/>
    </NativeRouter>
  )
   
  
} 

