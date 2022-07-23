import React, { useRef } from 'react';
const Toolbar = ({ filters, onSelectFilter }) => {
	const buttonRef = useRef();
	const onClickFilter = (e) => {
		onSelectFilter(e);
	};

	console.log(buttonRef.current);

	return (
		<div className="toolbar">
			{filters.map((filter) => (
				<button key={Math.random()} onClick={onClickFilter} ref={buttonRef}>
					{filter}
				</button>
			))}
		</div>
	);
};

export default Toolbar;
