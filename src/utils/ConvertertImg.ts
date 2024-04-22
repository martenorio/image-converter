import { filetoDataURL, compressAccurately, EImageType, dataURLtoImage, downloadFile, compressAccuratelyConfig } from 'image-conversion';

export class ConvertertImg {
  constructor() { }

  public async ToImageLib(file: File, formatToConvert: EImageType) {
    //const file = await urltoBlob('./img/demo.png');
    const image = await this.filetoImage(file);
    const config: compressAccuratelyConfig = {
      size: Number((file.size / 1024).toFixed()),
      accuracy: 0.99,
      type: formatToConvert,
      width: image.width,
      height: image.height,
      scale: 0,
    }
    const compress_file = await compressAccurately(file, config);
    const imageName = file.name.split('.')[0] + new Date().toJSON().replace('.', '_') + this.getExtension(formatToConvert);
    // console.log(imageName)
    // console.log(compress_file)
    // console.log(await this.filetoImage(compress_file));
    downloadFile(compress_file, imageName);
  }
  async filetoImage(file: Blob) {
    const dataURL = await filetoDataURL(file);
    return dataURLtoImage(dataURL);
  }
  private getExtension(format: EImageType): string | boolean {
    if (format === EImageType.GIF) return '.gif';
    if (format === EImageType.JPEG) return '.jpeg';
    if (format === EImageType.PNG) return '.png';
    return false;
  }
}



