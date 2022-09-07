import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import {
  animated,
  easings,
  SpringToFn,
  useSpring,
  useSpringRef,
} from "react-spring";
import { twMerge } from "tailwind-merge";

const HorizontalSlidingTrack = ({
  direction = "to-left",
  loopDuration = 50000,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  direction?: "to-left" | "to-right";
  loopDuration?: number;
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  // const initComplete = useRef<boolean>(false);

  type AnimationProps = {
    transform: string;
    translateXDistance: number;
  };

  const springRef = useSpringRef();
  const animation = useSpring({
    ref: springRef,
    from: {
      transform: "translateX(0px)",
      translateXDistance: 0,
    } as AnimationProps,
  });

  useEffect(() => {
    const initialChildCount = React.Children.count(children);
    if (
      listRef.current /* && !initComplete.current*/ &&
      initialChildCount > 0
    ) {
      let currentTranslateXDistance: number;
      let currentTransform: string;
      currentTranslateXDistance = animation.translateXDistance.get();
      currentTransform = animation.transform.get();
      //TODO Watch width and height ?
      //TODO Get from getBoundingClientRect() ?
      // const listBoundingRect = listRef.current.getBoundingClientRect();
      let listWidth = listRef.current.clientWidth;
      let listScrollWidth = listRef.current.scrollWidth;
      let translateXMax = listScrollWidth - listWidth;
      // console.log("scrollWidth", listScrollWidth);
      // console.log("clientWidth", listWidth);
      //Duplicate to fill width
      if (listWidth > 0) {
        const initialChildNodes: Node[] = [];
        for (let i = 0; i < initialChildCount; i++) {
          initialChildNodes.push(listRef.current.childNodes[i]);
        }
        while (listScrollWidth < listWidth * 2) {
          for (let node of initialChildNodes) {
            if (node) listRef.current.append(node.cloneNode(true));
          }
          listScrollWidth = listRef.current.scrollWidth;
          listWidth = listRef.current.clientWidth;
          translateXMax = listScrollWidth - listWidth;
        }
      }
      // console.log(
      //   "listRef.current.childElementCount",
      //   listRef.current.childElementCount
      // );
      // console.log("initialChildCount", initialChildCount);
      //TODO When no duplicate find solution for animation
      if (listRef.current.childElementCount > initialChildCount) {
        // console.log("\ndirection", direction);
        currentTranslateXDistance = animation.translateXDistance.get();
        currentTransform = animation.transform.get();
        if (direction == "to-right" && currentTranslateXDistance == 0) {
          springRef.start({
            to: {
              transform: "translateX(-" + translateXMax + "px)",
              translateXDistance: translateXMax,
            },
            immediate: true,
          });
          currentTransform = "translateX(-" + translateXMax + "px)";
          currentTranslateXDistance = translateXMax;
        }
        // console.log("currentTranslateXDistance", currentTranslateXDistance);
        let loopTrigger: Element;
        let loopWidth: number;
        if (direction == "to-left") {
          loopTrigger = listRef.current.children.item(initialChildCount)!;
          // console.log("loopTriggerIndex", initialChildCount);
          // noinspection UnnecessaryLocalVariableJS
          const loopTriggerLeft =
            currentTranslateXDistance + loopTrigger.getBoundingClientRect().x;
          // console.log("loopTriggerLeft", loopTriggerLeft);
          loopWidth = loopTriggerLeft;
          /// Test To-left
          // if (loopTrigger instanceof HTMLElement)
          //   loopTrigger.style.backgroundColor = "blue";

          // Warning disturb computation related to child count
          // listRef.current.style.position = "relative";
          // const markerDiv = document.createElement("div");
          // markerDiv.className = "absolute top-0 bottom-0 left-0 bg-red-400/20";
          // markerDiv.style.width = loopWidth + "px";
          // // markerDiv.style.transform = `translateX(${loopTrigger.clientWidth}px)`;
          // listRef.current.appendChild(markerDiv);
          /// Test
        } else {
          loopTrigger = listRef.current.children.item(
            listRef.current.childElementCount - initialChildCount - 1
          )!;
          // console.log(
          //   "loopTriggerIndex",
          //   listRef.current.childElementCount - initialChildCount - 1
          // );
          const loopTriggerLeft =
            currentTranslateXDistance + loopTrigger.getBoundingClientRect().x;
          // console.log("loopTriggerLeft", loopTriggerLeft);
          let loopTriggerRight: number;
          if (loopTriggerLeft >= 0) {
            loopTriggerRight =
              loopTriggerLeft + loopTrigger.getBoundingClientRect().width;
          } else {
            loopTriggerRight =
              currentTranslateXDistance +
              loopTriggerLeft +
              loopTrigger.getBoundingClientRect().width;
          }
          // console.log("loopTriggerRight", loopTriggerRight);
          loopWidth = listScrollWidth - loopTriggerRight /*+ currentScroll*/;
          /// Test to right
          // if (loopTrigger instanceof HTMLElement)
          //   loopTrigger.style.backgroundColor = "blue";

          // Warning disturb computation related to child count
          // listRef.current.style.position = "relative";
          // const markerDiv = document.createElement("div");
          // markerDiv.className = "absolute top-0 bottom-0 bg-red-400/20";
          // markerDiv.style.right = -(scrollWidth - clientWidth) + "px";
          // markerDiv.style.width = loopWidth + "px";
          // // markerDiv.style.transform = `translateX(${loopTrigger.clientWidth}px)`;
          // listRef.current.appendChild(markerDiv);
          /// Test
        }
        // console.log("loopWidth", loopWidth);
        //Animation
        //<editor-fold desc="Animation">
        springRef.start({
          to: (async (start, stop) => {
            if (listRef.current) {
              if (direction == "to-left") {
                if (currentTranslateXDistance > 0) {
                  // console.log("Catchup stage");
                  const catchupWidth = loopWidth - currentTranslateXDistance;
                  const catchupDuration =
                    (catchupWidth * loopDuration) / loopWidth;
                  // console.log("catchup duration:", catchupDuration);
                  // console.log("speed", catchupWidth / catchupDuration);
                  await start({
                    to: {
                      transform: "translateX(-" + loopWidth + "px)",
                      translateXDistance: loopWidth,
                    },
                    config: {
                      duration: catchupDuration,
                      easing: easings.linear,
                    },
                    immediate: false,
                    reset: false,
                    loop: false,
                  });
                }
                // console.log("\ndirection", direction);
                // console.log("Normal stage loop");
                // console.log("Duration: ", loopDuration);
                await start({
                  from: {
                    transform: "translateX(0px)",
                    translateXDistance: 0,
                  },
                  to: {
                    transform: "translateX(-" + loopWidth + "px)",
                    translateXDistance: loopWidth,
                  },
                  config: { duration: loopDuration, easing: easings.linear },
                  loop: true,
                  immediate: false,
                });
              } else {
                if (currentTranslateXDistance < translateXMax) {
                  // console.log("Catchup stage");
                  const catchupWidth =
                    loopWidth - (translateXMax - currentTranslateXDistance);
                  const catchupDuration =
                    (catchupWidth * loopDuration) / loopWidth;
                  // console.log("catchup duration:", catchupDuration);
                  // console.log("speed", catchupWidth / catchupDuration);
                  await start({
                    to: {
                      transform:
                        "translateX(-" + (translateXMax - loopWidth) + "px)",
                      translateXDistance: translateXMax - loopWidth,
                    },
                    config: {
                      duration: catchupDuration,
                      easing: easings.linear,
                    },
                    reset: false,
                    loop: false,
                  });
                }
                // console.log("\ndirection", direction);
                // console.log("Normal stage loop");
                // console.log("Duration: ", loopDuration);
                await start({
                  from: {
                    transform: "translateX(-" + translateXMax + "px)",
                    translateXDistance: translateXMax,
                  },
                  to: {
                    transform:
                      "translateX(-" + (translateXMax - loopWidth) + "px)",
                    translateXDistance: translateXMax - loopWidth,
                  },
                  config: { duration: loopDuration, easing: easings.linear },
                  loop: true,
                  reset: true,
                });
              }
            }
          }) as SpringToFn<AnimationProps>,
        });
        //</editor-fold>
      }
      // initComplete.current = true;
    }
  }, [children]);

  // useEffect(() => {
  //   console.log("children changed", children);
  // }, [children]);

  // useEffect(() => {
  //   console.log("use effect restarted");
  // }, []);

  return (
    // <div>
    <animated.div
      ref={listRef}
      style={{ transform: animation.transform }}
      className={twMerge("flex [&>*]:shrink-0 ", className)}
      {...rest}
      // scrollLeft={animation.scroll}
    >
      {children}
    </animated.div>
    //   <animated.p>{animation.scroll.to((n) => n.toFixed(0))}</animated.p>
    // </div>
  );
};

export default HorizontalSlidingTrack;

const HorizontalSlidingTrackScrollVersion = ({
  direction = "to-left",
  loopDuration = 20000,
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  direction?: "to-left" | "to-right";
  loopDuration?: number;
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  // const initComplete = useRef<boolean>(false);

  type AnimationProps = {
    scroll: number;
  };

  const springRef = useSpringRef();
  const animation = useSpring({
    ref: springRef,
    from: { scroll: 0 } as AnimationProps,
  });

  useEffect(() => {
    if (listRef.current /* && !initComplete.current*/) {
      const initialChildCount = React.Children.count(children);
      let currentScroll: number;
      currentScroll = animation.scroll.get();
      //TODO Watch width and height ?
      //TODO Get from getBoundingClientRect() ?
      // const listBoundingRect = listRef.current.getBoundingClientRect();
      let listWidth = listRef.current.clientWidth;
      let listScrollWidth = listRef.current.scrollWidth;
      let scrollMax = listScrollWidth - listWidth;
      // console.log("scrollWidth", listScrollWidth);
      // console.log("clientWidth", listWidth);
      //Duplicate to fill width
      if (listWidth > 0) {
        const initialChildNodes: Node[] = [];
        for (let i = 0; i < initialChildCount; i++) {
          initialChildNodes.push(listRef.current.childNodes[i]);
        }
        while (listScrollWidth < listWidth * 2) {
          for (let node of initialChildNodes) {
            if (node) listRef.current.append(node.cloneNode(true));
          }
          listScrollWidth = listRef.current.scrollWidth;
          listWidth = listRef.current.clientWidth;
          scrollMax = listScrollWidth - listWidth;
        }
      }
      // console.log(
      //   "listRef.current.childElementCount",
      //   listRef.current.childElementCount
      // );
      // console.log("initialChildCount", initialChildCount);
      //TODO When no duplicate find solution for animation
      if (listRef.current.childElementCount > initialChildCount) {
        // console.log("\ndirection", direction);
        currentScroll = animation.scroll.get();
        if (direction == "to-right" && currentScroll == 0) {
          springRef.start({
            to: {
              scroll: scrollMax,
            },
            immediate: true,
          });
          currentScroll = scrollMax;
        }
        // console.log("currentScroll", currentScroll);
        let loopTrigger: Element;
        let loopWidth: number;
        if (direction == "to-left") {
          loopTrigger = listRef.current.children.item(initialChildCount)!;
          // console.log("loopTriggerIndex", initialChildCount);
          // noinspection UnnecessaryLocalVariableJS
          const loopTriggerLeft =
            currentScroll + loopTrigger.getBoundingClientRect().x;
          // console.log("loopTriggerLeft", loopTriggerLeft);
          loopWidth = loopTriggerLeft;
          /// Test
          // if (loopTrigger instanceof HTMLElement)
          //   loopTrigger.style.backgroundColor = "blue";

          // Warning disturb computation related to child count
          // listRef.current.style.position = "relative";
          // const markerDiv = document.createElement("div");
          // markerDiv.className = "absolute top-0 bottom-0 left-0 bg-red-400/20";
          // markerDiv.style.width = loopWidth + "px";
          // // markerDiv.style.transform = `translateX(${loopTrigger.clientWidth}px)`;
          // listRef.current.appendChild(markerDiv);
          /// Test
        } else {
          loopTrigger = listRef.current.children.item(
            listRef.current.childElementCount - initialChildCount - 1
          )!;
          // console.log(
          //   "loopTriggerIndex",
          //   listRef.current.childElementCount - initialChildCount - 1
          // );
          const loopTriggerLeft =
            currentScroll + loopTrigger.getBoundingClientRect().x;
          // console.log("loopTriggerLeft", loopTriggerLeft);
          let loopTriggerRight: number;
          if (loopTriggerLeft >= 0) {
            loopTriggerRight =
              loopTriggerLeft + loopTrigger.getBoundingClientRect().width;
          } else {
            loopTriggerRight =
              currentScroll +
              loopTriggerLeft +
              loopTrigger.getBoundingClientRect().width;
          }
          // console.log("loopTriggerRight", loopTriggerRight);
          loopWidth = listScrollWidth - loopTriggerRight /*+ currentScroll*/;
          /// Test
          // if (loopTrigger instanceof HTMLElement)
          //   loopTrigger.style.backgroundColor = "blue";

          // Warning disturb computation related to child count
          // listRef.current.style.position = "relative";
          // const markerDiv = document.createElement("div");
          // markerDiv.className = "absolute top-0 bottom-0 bg-red-400/20";
          // markerDiv.style.right = -(scrollWidth - clientWidth) + "px";
          // markerDiv.style.width = loopWidth + "px";
          // // markerDiv.style.transform = `translateX(${loopTrigger.clientWidth}px)`;
          // listRef.current.appendChild(markerDiv);
          /// Test
        }
        // console.log("loopWidth", loopWidth);
        //Animation
        springRef.start({
          to: (async (start, stop) => {
            if (listRef.current) {
              if (direction == "to-left") {
                if (currentScroll > 0) {
                  // console.log("Catchup stage");
                  const catchupWidth = loopWidth - currentScroll;
                  const catchupDuration =
                    (catchupWidth * loopDuration) / loopWidth;
                  // console.log("catchup duration:", catchupDuration);
                  // console.log("speed", catchupWidth / catchupDuration);
                  await start({
                    to: {
                      scroll: loopWidth,
                    },
                    config: {
                      duration: catchupDuration,
                      easing: easings.linear,
                    },
                    reset: false,
                    loop: false,
                  });
                }
                // console.log("\ndirection", direction);
                // console.log("Normal stage loop");
                // console.log("Duration: ", loopDuration);
                await start({
                  from: { scroll: 0 },
                  to: { scroll: loopWidth },
                  config: { duration: loopDuration, easing: easings.linear },
                  loop: true,
                });
              } else {
                if (currentScroll < scrollMax) {
                  // console.log("Catchup stage");
                  const catchupWidth = loopWidth - (scrollMax - currentScroll);
                  const catchupDuration =
                    (catchupWidth * loopDuration) / loopWidth;
                  // console.log("catchup duration:", catchupDuration);
                  // console.log("speed", catchupWidth / catchupDuration);
                  await start({
                    to: {
                      scroll: scrollMax - loopWidth,
                    },
                    config: {
                      duration: catchupDuration,
                      easing: easings.linear,
                    },
                    reset: false,
                    loop: false,
                  });
                }
                // console.log("\ndirection", direction);
                // console.log("Normal stage loop");
                // console.log("Duration: ", loopDuration);
                await start({
                  from: { scroll: scrollMax },
                  to: {
                    scroll: scrollMax - loopWidth,
                  },
                  config: { duration: loopDuration, easing: easings.linear },
                  loop: true,
                  reset: true,
                });
              }
            }
          }) as SpringToFn<AnimationProps>,
        });
      }
      // initComplete.current = true;
    }
  }, [children]);

  // useEffect(() => {
  //   console.log("children changed", children);
  // }, [children]);

  // useEffect(() => {
  //   console.log("use effect restarted");
  // }, []);

  return (
    // <div>
    <animated.div
      ref={listRef}
      className={twMerge(
        "scrollbar-none flex max-w-fit overflow-x-auto [&>*]:shrink-0 ",
        className
      )}
      {...rest}
      scrollLeft={animation.scroll}
    >
      {children}
    </animated.div>
    //   <animated.p>{animation.scroll.to((n) => n.toFixed(0))}</animated.p>
    // </div>
  );
};
