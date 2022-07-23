const ProjectList = ({ projects, onSelectFilter }) => {
	const onClickFilter = (e) => {
		onSelectFilter(e);
	};
	return (
		<div className="cards-wrapper">
			{projects &&
				projects.map((project) => (
					<div key={Math.random()} className="image">
						<img src={project.img} alt={project.category} />
						<button onClick={onClickFilter}>{project.category}</button>
						<span>{project.category}</span>
					</div>
				))}
		</div>
	);
};

export default ProjectList;
