import * as React from 'react'
import  { useState, useCallback } from "react";
import Shophome from './ShopHome';
import Card from "react-bootstrap/Card";
import {useDropzone} from 'react-dropzone'
const ShopRoot=()=>{
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <div>
      <h1 > ShopRoot</h1>
       <Card>
         <Card.Header>
           <h2> Upload The Assert </h2>
           </Card.Header>
           <Card.Body>




             </Card.Body>



         </Card>
      <Shophome/>
    </div>
  );

}
export default ShopRoot