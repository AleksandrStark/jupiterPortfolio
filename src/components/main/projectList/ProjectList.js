import React from 'react';
import classes from '../portfolio/Portfolio.module.css';

const ProjectList = ({ projects }) => {
	return (
		<div>
			{projects &&
				projects.map((project) => (
					<div key={Math.random()} className={classes.items}>
						<img src={project.img} alt={project.category} />
					</div>
				))}
		</div>
	);
};

export default ProjectList;
