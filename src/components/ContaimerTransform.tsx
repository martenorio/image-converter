import { TransformImages } from "./TransformImages";
import './../css/stars.css';

export const ContaimerTransform = () => {

  return (
    <div className="w-full">
      <div className='stars overflow-hidden'></div>
      <div className='stars2 overflow-hidden'></div>
      <div className='stars3 overflow-hidden'></div>
      <TransformImages />
    </div>
  )
}
