import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { useAnimate } from "framer-motion";
import { UseConverterImage } from '@/hooks/UseConverterImage';
import { CirclesAnimated } from './CirclesAnimated';
import { RadioGroupImages } from './RadioGroupImages';
import React from 'react';



export const TransformImages = () => {
  const [scope, animate] = useAnimate()
  const { setMyFile, convertImage, formatToConvert, setFormatToConvert } = UseConverterImage();
  const [lastColor, setLastColor] = useState("#ffffff")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    setMyFile(file);
  }, [setMyFile]);
  const acceptedFilesFormat = {
    'image/png': ['.jpeg', '.png', '.gif'],
    'image/gif': ['.jpeg', '.png', '.gif'],
    'image/jpeg': ['.jpeg', '.png', '.gif'],
  }
  const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept, acceptedFiles } = useDropzone({ onDrop, accept: acceptedFilesFormat, maxFiles: 1 })
  useEffect(() => {
    if (isDragActive) {
      animate(scope.current, { boxShadow: "0px 0px 50px 15px #ffffff" });
      setLastColor("#ffffff");
    }
    if (isDragReject) {
      animate(scope.current, { boxShadow: "0px 0px 100px 30px #ff5050" });
      setLastColor("#ff5050");
    }
    if (acceptedFiles.length > 0) {
      animate(scope.current, { boxShadow: "0px 0px 100px 30px #2B6CB0" });
      setLastColor("#2B6CB0");
    }
    if (!isDragActive && acceptedFiles.length === 0) {
      animate(scope.current, { boxShadow: "0px 0px 0px 0px " + lastColor })
    }
  }, [isDragActive, isDragReject, acceptedFiles, lastColor, animate, scope])

  return (
    <section className='flex flex-col flex-1 w-full h-[calc(100vh-6px)] absolute -top-[6px] overflow-x-hidden'>
      <div {...getRootProps()} className='flex-1 flex justify-center items-center relative'>
        <CirclesAnimated scope={scope} />
        <div className="z-10 p-4 shadow-sm w-72 h-72 rounded-full flex flex-col justify-center items-center">
          {/* <div {...getRootProps()}> */}
          <input type='file' multiple={false} {...getInputProps()} />
          {isDragActive && <p className='text-slate-100 text-center'>Suelta los imagen aquí.</p>}
          {isDragAccept && (<p className='text-slate-100 text-center'>(Imagen con el formato correcto)</p>)}
          {isDragReject && (<p className='text-slate-100 text-center'>(Solo se aceptan imagenes con el formato png, jpeg o gif)</p>)}
          {(!isDragActive && acceptedFiles.length === 0) && (<p className='text-slate-100 text-center'>Arrastre y suelta tu imagen aquí o clic para seleccionar alguna imagen.</p>)}
          {acceptedFiles.map((file, i) => (
            <React.Fragment key={i}>
              <p className='text-xl text-slate-100 text-center font-semibold'>
                {file.name}
              </p>
              <p className='text-center font-semibold text-orange-300'>{file.size} bytes</p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='flex justify-center p-6'>
        <div className='backdrop-blur-sm border-slate-200 border rounded-lg p-6 w-full md:max-w-3xl flex  flex-col'>
          <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Transforma tus{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              imagenes
            </span>
          </h1>
          <div className='flex justify-around md:flex-row flex-col'>
            <div className='flex flex-col items-center gap-5'>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Formato a convertir
              </h3>
              <RadioGroupImages
                formatToConvert={formatToConvert}
                setFormatToConvert={setFormatToConvert}
              />
            </div>
          </div>
          {/* <button
            type='button'
            disabled={Boolean(formatToConvert)}
            onClick={convertImage}
            className='mt-5  from-rose-400 via-fuchsia-400 to-indigo-500 bg-gradient-to-r focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2'>
            Transformar
          </button> */}
          <div className="relative inline-flex mt-8 group">
            <div
              className="absolute transitiona-all duration-1000 opacity-100 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200 animate-tilt">
            </div>
            {/* <button
                  type='button'
                  disabled={Boolean(formatToConvert)}
                  onClick={convertImage}
                  className='mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2'>
                  Transformar
                </button> */}
            <button
              type='button'
              onClick={convertImage}
              className="w-full relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-700 dark:bg-gray-950 font-pj rounded-xl"
            >
              Transformar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
