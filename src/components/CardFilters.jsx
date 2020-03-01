import React from 'react';

const CardFilter = ({ filter, image, setFilter, handleNext }) => (
	<div className={filter.name}>
		<p>{filter.name}</p>
		<div
		className="img"
		id={filter.name}
		onClick={() => {setFilter(filter.name); handleNext()}}>
			<img src={image} alt="your_image" />
		</div>
	</div>
);

export default CardFilter;