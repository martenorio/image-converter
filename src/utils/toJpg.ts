export class convertToJPG {
  constructor() { }
  static convertDataURIToBinary(dataURI: string) {
    const BASE64_MARKER = ';base64,';
    const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = dataURI.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));

    for (i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }


  static convert2JPG = function (file) {
    const image = new Image();

    image.src = file.nativeURL;
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);

    image.onload = function () {
      //save to temp location??

      file.createWriter(function (fileWriter: { write: (arg0: Blob) => void; }) {

        file.onWriteEnd = function (e) {
          console.log('Write completed.');
        };

        file.onError = function (e) {
          console.log('Write failed: ' + e.toString());
        };

        // Create a new Blob and write it to log.txt.
        const ui8a = convertToJPG.convertDataURIToBinary(image);
        const blob = new Blob(ui8a.buffer, { type: "image/jpeg" });
        fileWriter.write(blob);
      },  );
    };

    image.src = canvas.toDataURL("image/jpg");
    return image;
  };
}