import gsap from "gsap/dist/gsap";
import { TransitionContext } from "../context/TransitionContext";
import { useState, useContext, useRef } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline } = useContext(TransitionContext);
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        setDisplayChildren(children);
      }else {
        timeline.play().then(()=>{
            timeline.seek(0).pause().clear()
        })
      }
    }
  },[children]);

//   useIsomorphicLayoutEffect(()=> {
//     gsap.to(el.current, {})
//   })

  return <div ref={el}> {displayChildren} </div>;
}
