import { useCallback, useState } from "react";
import { animated, easings, SpringToFn, useSpring } from "react-spring";
import FancyCursor from "@/public/icons/fancy-cursor.svg";

const SelectionAnimatedText = ({
  children,
  onAnimationComplete,
}: {
  children: string;
  onAnimationComplete?: () => void;
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showSelectionBox, setShowSelectionBox] = useState(false);

  type AnimationProps = {
    selectionBoxWidth?: string;
    selectionBoxHeight?: string;
    textColor?: string;
    cursorTop?: string;
    cursorLeft?: string;
  };
  const [animation] = useSpring(
    {
      from: {
        selectionBoxWidth: "0%",
        selectionBoxHeight: "0%",
        textColor: "#5F5F5F",
        cursorTop: "100%",
        cursorLeft: "10%",
      } as AnimationProps,
      to: useCallback(
        (async (start, stop) => {
          await start({
            cursorTop: "0%",
            cursorLeft: "0%",
            config: {
              duration: 550,
            },
          });
          setShowSelectionBox(true);
          await new Promise((resolve) => setTimeout(resolve, 330));
          // Ripple animation
          await start({
            selectionBoxWidth: "100%",
            selectionBoxHeight: "100%",
            cursorTop: "100%",
            cursorLeft: "100%",
            config: {
              duration: 880,
            },
          });
          await start({
            cursorTop: "105%",
            cursorLeft: "102%",
            textColor: "#4841FF",
            config: {
              duration: 440,
            },
          });
          setAnimationComplete(true);
          onAnimationComplete?.();
        }) as SpringToFn<AnimationProps>,
        []
      ),
      delay: 1800,
      config: {
        easing: easings.easeInOutSine,
      },
    },
    []
  );

  return (
    <div className="relative mb-6 p-4 md:p-6">
      <animated.div
        style={{
          width: animation.selectionBoxWidth,
          height: animation.selectionBoxHeight,
        }}
        className={`absolute top-0 left-0 ${
          showSelectionBox ? "border-[1.4px]" : ""
        } border-[#0C8CE9]`}
      >
        {showSelectionBox && (
          <>
            <div className="absolute top-0 left-0 aspect-square h-3 -translate-y-1/2 -translate-x-1/2 border border-[#2B9AEB] bg-white" />
            <div className="absolute top-0 right-0 aspect-square h-3 -translate-y-1/2 translate-x-1/2 border border-[#2B9AEB] bg-white" />
            <div className="absolute bottom-0 left-0 aspect-square h-3 translate-y-1/2 -translate-x-1/2 border border-[#2B9AEB] bg-white" />
            <div className="absolute bottom-0 right-0 aspect-square h-3 translate-y-1/2 translate-x-1/2 border border-[#2B9AEB] bg-white">
              {/*Ripple*/}
              <div className="m-auto aspect-square h-3 animate-ripple rounded-full bg-blue-300" />
            </div>
          </>
        )}
      </animated.div>
      <animated.h1
        style={{ color: animation.textColor }}
        className="text-center text-3xl font-medium md:text-5xl"
      >
        {children}
      </animated.h1>
      <animated.div
        style={{
          top: animation.cursorTop,
          left: animation.cursorLeft,
        }}
        className={`absolute ${
          animationComplete ? "group-hover:opacity-0" : ""
        } transition-opacity`}
      >
        <FancyCursor className="md-max:w-5" />
      </animated.div>
    </div>
  );
};

export default SelectionAnimatedText;

export const SelectionAnimatedTextNoAnimationFallBack = ({
  children,
}: {
  children: string;
}) => {
  return (
    <div className="relative mb-6 p-4 md:p-6 sm-max:mx-5">
      <div className="absolute inset-0 border-[1.4px] border-[#0C8CE9]">
        <div className="absolute top-0 left-0 aspect-square h-3 -translate-y-1/2 -translate-x-1/2 border border-[#2B9AEB] bg-white" />
        <div className="absolute top-0 right-0 aspect-square h-3 -translate-y-1/2 translate-x-1/2 border border-[#2B9AEB] bg-white" />
        <div className="absolute bottom-0 left-0 aspect-square h-3 translate-y-1/2 -translate-x-1/2 border border-[#2B9AEB] bg-white" />
        <div className="absolute bottom-0 right-0 aspect-square h-3 translate-y-1/2 translate-x-1/2 border border-[#2B9AEB] bg-white" />
      </div>
      <h1 className="text-center text-3xl font-medium text-main-blue md:text-5xl">
        {children}
      </h1>
      <div className="absolute top-[105%] left-[102%] transition-opacity">
        <FancyCursor className="md-max:w-5" />
      </div>
    </div>
  );
};

// const SelectionAnimatedTextFramer = ({ children }: { children: string }) => {
//   const animationTransitionConfig: Transition = {
//     delay: 0.5,
//     duration: 2.2,
//     times: [0, 0.25, 0.4, 0.8, 1],
//   };
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const [showSelectionBox, setShowSelectionBox] = useState(false);
//   return (
//     <div className="relative mb-6 p-4 md:p-6">
//       <motion.div
//         animate={{
//           width: ["0%", "0%", "0%", "100%", "100%"],
//           height: ["0%", "0%", "0%", "100%", "100%"],
//         }}
//         transition={animationTransitionConfig}
//         className={`absolute top-0 left-0 ${
//           showSelectionBox ? "border-[1.4px]" : ""
//         } border-[#0C8CE9]`}
//       >
//         {showSelectionBox && (
//           <>
//             <div className="absolute top-0 left-0 aspect-square h-3 -translate-y-1/2 -translate-x-1/2 border border-[#2B9AEB] bg-white" />
//             <div className="absolute top-0 right-0 aspect-square h-3 -translate-y-1/2 translate-x-1/2 border border-[#2B9AEB] bg-white" />
//             <div className="absolute bottom-0 left-0 aspect-square h-3 translate-y-1/2 -translate-x-1/2 border border-[#2B9AEB] bg-white" />
//             <div className="absolute bottom-0 right-0 aspect-square h-3 translate-y-1/2 translate-x-1/2 border border-[#2B9AEB] bg-white" />
//           </>
//         )}
//       </motion.div>
//       <motion.h1
//         animate={{
//           color: ["#5F5F5F", "#5F5F5F", "#5F5F5F", "#5F5F5F", "#4841FF"],
//         }}
//         transition={animationTransitionConfig}
//         className="text-center text-3xl  font-medium md:text-5xl"
//       >
//         {children}
//       </motion.h1>
//       <motion.div
//         animate={{
//           top: ["100%", "0%", "0%", "100%", "105%"],
//           left: ["10%", "0%", "0%", "100%", "102%"],
//         }}
//         transition={animationTransitionConfig}
//         onUpdate={(values) => {
//           if (
//             Number((values.top as string).replace("%", "")) < 2 &&
//             !showSelectionBox
//           ) {
//             // console.log("values", JSON.stringify(values));
//             setShowSelectionBox(true);
//           }
//         }}
//         onAnimationComplete={() => {
//           setAnimationComplete(true);
//         }}
//         className={`absolute ${
//           animationComplete ? "group-hover:opacity-0" : ""
//         } transition-opacity`}
//       >
//         <FancyCursor className="md-max:w-5" />
//       </motion.div>
//     </div>
//   );
// };
