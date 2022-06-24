import React from 'react';

const ProjectList = ({ projects }) => {
	return (
		<div className="cards-wrapper">
			{projects &&
				projects.map((project) => (
					<div key={Math.random()} className="image">
						<img src={project.img} alt={project.category} />
					</div>
				))}
		</div>
	);
};

export default ProjectList;
