import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [time, setTime] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setTime(time => time + 1);
		}, 100 * props.delay);
	}, []);

	return <div>{time % 10}</div>;
};

export default Counter;

Counter.propTypes = {
	delay: PropTypes.number
};
//starts from miliseconds, to not confuse you
