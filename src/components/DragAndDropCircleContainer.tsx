import React, { FC } from 'react'
import { useDropzone } from 'react-dropzone'
import { CirclesAnimated } from './CirclesAnimated';
import AccepFilesFormat from './../utils/AcceptedFilesFormat';
import { UseMyDragAndDrop } from './../hooks/UseMyDragAndDrop';
interface Props{
  onDrop:(acceptedFiles: unknown) => void
}

export const DragAndDropCircleContainer:FC<Props> = ({ onDrop }) => {
  const dropZoneState = useDropzone({ onDrop, accept: AccepFilesFormat, maxFiles: 1 });
  const { scope } = UseMyDragAndDrop({DropzoneState:dropZoneState});
  const { 
    getRootProps, getInputProps, isDragActive, 
    isDragReject, isDragAccept, acceptedFiles 
  } = dropZoneState;
  
  return (
    <div {...getRootProps()} className='flex-1 flex justify-center items-center relative'>
      <CirclesAnimated scope={scope} />
      <div className="z-10 p-4 shadow-sm w-72 h-72 rounded-full flex flex-col justify-center items-center">
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
  )
}
