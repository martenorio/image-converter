import { useCallback } from 'react';
import { UseConverterImage } from '@/hooks/UseConverterImage';
import { CardTransform } from './CardTransform';
import { DragAndDropCircleContainer } from './DragAndDropCircleContainer';


export const TransformImages = () => {
  const {
    setMyFile,
    convertImage,
    formatToConvert,
    setFormatToConvert
  } = UseConverterImage();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    setMyFile(file);
  }, [setMyFile]);


  return (
    <section className='flex flex-col flex-1 w-full h-[calc(100vh-6px)] absolute -top-[6px] overflow-x-hidden'>
      <DragAndDropCircleContainer
        onDrop={onDrop}
      />
      <CardTransform
        convertImage={convertImage}
        formatToConvert={formatToConvert}
        setFormatToConvert={setFormatToConvert}
      />
    </section>
  )
}
