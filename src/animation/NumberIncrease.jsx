import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const NumberIncrease = ({ mynumber, extra }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const props = useSpring({
    from: { number: 0 },
    to: { number: inView ? Number(mynumber) : 0 },
    config: { duration: 1500 },
  });

  return (
    <div ref={ref}>
      <animated.div>
        {props.number.to((val) => `${val.toFixed(0)}${extra}`)}
      </animated.div>
    </div>
  );
};

export default NumberIncrease;
