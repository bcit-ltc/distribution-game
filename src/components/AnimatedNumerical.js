import React from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedNumerical(props) {

    console.log(props.duration);
    const value = useSpring({
        config: { duration: typeof(props.duration)  === 'undefined' ? 1200 : props.duration },
        number: props.to,
        from: { number: props.from }
    })

    return <animated.span >{value.number.interpolate(number => Math.floor(number))}</animated.span>

}

export default AnimatedNumerical;