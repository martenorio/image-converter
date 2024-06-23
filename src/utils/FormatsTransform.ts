import JPGIMAGE from './../assets/jpg-svgrepo-com.svg';
import PNGIMAGE from './../assets/png-svgrepo-com.svg';
import GIFIMAGE from './../assets/gif-svgrepo-com.svg';
import { EImageType } from 'image-conversion';

const listOfFormats = [
  {
    img: PNGIMAGE,
    value: EImageType.PNG,
    label: 'PNG',
    id: 'png-format'
  },
  {
    img: JPGIMAGE,
    value: EImageType.JPEG,
    label: 'JPEG',
    id: 'jpeg-format'
  },
  {
    img: GIFIMAGE,
    value: EImageType.GIF,
    label: 'GIF',
    id: 'gif-format'
  }
];

export default listOfFormats;