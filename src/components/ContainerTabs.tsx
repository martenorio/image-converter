import { TabContentTransform } from "./TabContentTransform";
import './../css/stars.css';

export const ContainerTabs = () => {

  return (
    <div className="w-full">
      <div className='stars overflow-hidden'></div>
      <div className='stars2 overflow-hidden'></div>
      <div className='stars3 overflow-hidden'></div>
      <TabContentTransform />
      {/* <TabContentCompress /> */}
    </div>
  )
}
