import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react'
import { DropzoneState } from 'react-dropzone';
interface Props{
  DropzoneState:DropzoneState
}
export const UseMyDragAndDrop = ({ DropzoneState }:Props) => {
  const { isDragActive, isDragReject, acceptedFiles } = DropzoneState;
  const [scope, animate] = useAnimate();
  const [lastColor, setLastColor] = useState("#ffffff");
  
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
  return ({ scope })
}
