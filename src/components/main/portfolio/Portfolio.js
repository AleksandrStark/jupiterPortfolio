import React from 'react';
import { getFiltered } from '../../../redux/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Toolbar from '../toolbar/Toolbar';
import ProjectList from '../projectList/ProjectList';

const Portfolio = () => {
	const dispatch = useDispatch();
	// const filtered = useSelector((state) => state.filter.selected);
	const filters = useSelector((state) => state.filter.filters);
	const onSelectFilter = (event) => {
		const filter = event.target.innerHTML;
		dispatch(getFiltered(filter));
	};
	const newArr = useSelector((state) => state.filter.demonstration);

	return (
		<div className="portfolio">
			<div className="toolbar">
				<Toolbar
					filters={filters}
					onSelectFilter={onSelectFilter}
					// onShowMore={onShowMore}
				/>
			</div>
			<div className="projectList">
				<ProjectList projects={newArr} onSelectFilter={onSelectFilter} />
			</div>
		</div>
	);
};

export default Portfolio;
