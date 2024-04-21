import {filetoDataURL,compressAccurately, EImageType,dataURLtoImage,downloadFile} from 'image-conversion';

export class ConvertertImg {
  constructor() { }

  public async convertImageLib(file:File){
    //const file = await urltoBlob('./img/demo.png');
    const image = await this.filetoImage(file); 
    //"image/png", "image/jpeg", "image/gif".
    const compress_file = await compressAccurately(file, {
      size: Number((file.size / 1024).toFixed()),
      accuracy:0.99,
      type: EImageType.JPEG,
      width:image.width,
      height:image.height,
      scale: 0,
    });
    //data.file = file;
    console.log(compress_file)
    console.log(this.filetoImage(compress_file));
    downloadFile(compress_file,new Date().toJSON().replace('.','_') + '.jpg');
  } 
  async filetoImage(file:Blob) {
    const dataURL = await filetoDataURL(file );
    return dataURLtoImage(dataURL)
  }

}



