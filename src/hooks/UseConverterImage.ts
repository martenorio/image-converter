import { ConvertertImg } from '@/utils/toJpg'
import { useState } from 'react'

export const UseConverterImage = () => {
  const [myFile, setMyFile] = useState()
  
  const convertFileToBase64 = ():Promise<string | ArrayBuffer | null | boolean> => {
    return new Promise((resolve, reject) => {
      if(!myFile) reject(false);
      const reader = new FileReader();
      reader.onloadend = function () {
        console.log('RESULT', reader.result)
        resolve(reader.result)
      }
      reader.onerror = (e) => {
        console.log(e);
        reject(false);
      }
      reader.readAsDataURL(myFile as unknown as Blob);
    })
  }
  const convertImage = async() => {
    console.log(myFile);
    const conimg = new ConvertertImg();
    const img = await conimg.convertImageLib(myFile);
    console.log(img);
    // console.log(convertToJPG.convert2JPG(myFile));
    // const imageBase64 = await convertFileToBase64();
    // if(imageBase64?.toString().includes("data:image/png")){
    //   console.log(convertToJPG.convert2JPG(myFile));
    // }
  }
  return ({
    myFile, 
    setMyFile,
    convertFileToBase64,
    convertImage,
  })
}
