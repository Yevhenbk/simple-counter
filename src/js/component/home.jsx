import React from "react";
import Counter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="containerHolder">
			<div className="counterContainer d-flex flex-wrap">
				<div className="icon">
					<i className="far fa-clock"></i>
				</div>
				<div className="counter">
					<p>
						<Counter delay={1000} />
					</p>
				</div>
				<div className="counter">
					<p>
						<Counter delay={100} />
					</p>
				</div>
				<div className="counter">
					<p>
						<Counter delay={10} />
					</p>
				</div>
				<div className="counter">
					<p>
						<Counter delay={1} />
					</p>
				</div>
				<button type="button" className="theButton reset">
					Reset
				</button>
				<button type="button" className="theButton stop" onClick={stop}>
					Stop
				</button>
				<button type="button" className="theButton resume">
					Resume
				</button>
			</div>
		</div>
	);
};

export default Home;
