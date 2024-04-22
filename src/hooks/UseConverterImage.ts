import { ConvertertImg } from '@/utils/ConvertertImg'
import { EImageType } from 'image-conversion';
import { useState } from 'react'

export const UseConverterImage = () => {
  const [myFile, setMyFile] = useState();
  const [formatToConvert, setFormatToConvert] = useState<EImageType>()
  
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
    if(!formatToConvert) return;
    console.log(myFile);
    const conver = new ConvertertImg();
    const img = await conver.ToImageLib(myFile as unknown as File,formatToConvert);
    console.log(img);
  }
  return ({
    myFile, 
    setMyFile,
    convertFileToBase64,
    convertImage,
    formatToConvert,
    setFormatToConvert,
  })
}
