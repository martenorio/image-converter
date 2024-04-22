import { AnimationScope, motion } from "framer-motion";
import { FC } from "react";
interface Props {
  scope: AnimationScope
}

export const CirclesAnimated:FC<Props> = ({scope}) => {
  return (
    <motion.div
      className="absolute flex justify-center items-center border-dashed border-2 border-sky-500 p-4 shadow-sm backdrop-blur-sm bg-slate-800 w-[42rem] h-[42rem] rounded-full"
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
  )
}
