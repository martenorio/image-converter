import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import JPGIMAGE from './../assets/jpg-svgrepo-com.svg';
import PNGIMAGE from './../assets/png-svgrepo-com.svg';
import { motion, useAnimate } from "framer-motion";
import { UseConverterImage } from '@/hooks/UseConverterImage';



export const TabContentTransform = () => {
  const [scope, animate] = useAnimate()
  const { setMyFile, convertImage, myFile } = UseConverterImage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    setMyFile(file);
    console.log();
  }, [myFile]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  useEffect(() => {
    if (isDragActive) {
      animate(scope.current, { boxShadow: "0px 0px 100px 30px #2B6CB0" })
    }
  }, [isDragActive])

  return (
    <div className='h-full flex-1'>

      <section className='flex flex-col flex-1 h-full overflow-x-hidden'>
        <div {...getRootProps()} className='flex-1 flex justify-center items-center relative'>
          <motion.div
            className="absolute flex justify-center items-center border-dashed border-2 border-sky-500 p-4 shadow-sm bg-slate-800 w-[42rem] h-[42rem] rounded-full"
            ref={scope}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <motion.div
              className="absolute flex justify-center items-center border-dashed border-2 border-yellow-500 p-4 shadow-sm bg-slate-900 w-[32rem] h-[32rem] rounded-full"
              animate={{
                rotate: -360,
                borderRadius: ["50%", "35%", "50%", "35%", "50%"],
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <motion.div
                className="absolute border-dashed border-2 border-blue-400 p-4 shadow-sm bg-blue-950 w-[26rem] h-[26rem] rounded-full"
                animate={{
                  rotate: 360,
                  borderRadius: ["50%", "40%", "50%", "40%", "50%"]
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="z-10 p-4 shadow-sm w-72 h-72 rounded-full flex justify-center items-center">
            {/* <div {...getRootProps()}> */}
            <input type='file' multiple={false} {...getInputProps()} />
            {
              isDragActive ?
                <p className='text-slate-100 text-center'>Suelta los archivos aquí ...</p> :
                <p className='text-slate-100 text-center'>Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos</p>
            }
            {/* </div> */}
          </div>
        </div>
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
                  Mi imagen
                </h3>
                <p>Mi_imagen.png</p>
              </div>
              <div className='flex flex-col items-center gap-5'>
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Formato a convertir
                </h3>
                <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                    <Label
                      htmlFor="card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <img src={PNGIMAGE} alt="mb-3 h-6 w-6" />
                      PNG
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="paypal"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <img src={JPGIMAGE} alt="mb-3 h-6 w-6" />
                      JPG
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <button
            onClick={convertImage} 
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2'>
              Transformar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
