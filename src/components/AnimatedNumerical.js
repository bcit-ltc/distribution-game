import React from 'react';
import { useSpring, animated} from 'react-spring';

function AnimatedNumerical(props) {
    
    const value = useSpring({config: { duration: 1200 }, number: props.to, from: { number: props.from } })
    
    return <animated.span>{value.number.interpolate(number => Math.floor(number))}</animated.span>

}

export default AnimatedNumerical;