import React, { FC } from 'react'
import { RadioGroupImages } from './RadioGroupImages'
import { EImageType } from 'image-conversion'
interface Props {
  formatToConvert: EImageType | undefined,
  setFormatToConvert: React.Dispatch<React.SetStateAction<EImageType | undefined>>,
  convertImage: () => Promise<void>,
}
export const CardTransform:FC<Props> = ({convertImage, formatToConvert, setFormatToConvert}) => {
  return (
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
        <div className="relative inline-flex mt-8 group">
          <div
            className="absolute transitiona-all duration-1000 opacity-100 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200 animate-tilt">
          </div>
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
  )
}
