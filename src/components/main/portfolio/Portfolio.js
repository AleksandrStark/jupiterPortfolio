import React, { Component } from 'react';
import Toolbar from '../toolbar/Toolbar';
import ProjectList from '../projectList/ProjectList';
import classes from './Portfolio.module.css';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: ['Show all', 'Designs', 'Branding', 'Illustrations', 'Motion'],
			selected: 'Show all',
			projects: this.projectsArray(),
		};
	}

	projectsArray = () => {
		return [
			{
				img: 'https://images.unsplash.com/photo-1655800055333-a0f37ca73907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Designs',
			},

			{
				img: 'https://images.unsplash.com/photo-1655844548845-41c1bee8b727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Motion',
			},

			{
				img: 'https://images.unsplash.com/photo-1655906541920-09ccb02adf51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Designs',
			},
			{
				img: 'https://images.unsplash.com/photo-1655882312480-a5d8d2170082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Illustrations',
			},
			{
				img: 'https://images.unsplash.com/photo-1655883870436-36c9c20719aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Branding',
			},
			{
				img: 'https://images.unsplash.com/photo-1655648619229-3cdc2fd1c8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Designs',
			},
			{
				img: 'https://images.unsplash.com/photo-1655893524580-0213c055f9ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Branding',
			},
			{
				img: 'https://images.unsplash.com/photo-1655844226452-0fac4ac80628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Illustrations',
			},
			{
				img: 'https://images.unsplash.com/photo-1655803242474-24fd28ae4210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
				category: 'Motion',
			},
		];
	};

	onSelectFilter = (event) => {
		const filter = event.target.textContent;
		this.setState({ selected: filter });

		const newArr = this.projectsArray();
		if (filter !== 'Show all') {
			const filteredProjects = newArr.filter(
				(proj) => proj.category === filter
			);
			this.setState({ projects: filteredProjects });
		} else {
			this.setState({ projects: this.projectsArray() });
		}
	};

	// onShowMore=()=>{
	// 	this.state({projects:})
	// }

	render() {
		return (
			<div className={classes.portfolio}>
				<div className={classes.toolbar}>
					<Toolbar
						filters={this.state.filters}
						selected={this.state.selected}
						changeFilter={this.changeFilter}
						onSelectFilter={this.onSelectFilter}
						onShowMore={this.onShowMore}
					/>
				</div>
				<div className={classes.projectList}>
					<ProjectList
						selected={this.state.selected}
						projects={this.state.projects}
					/>
				</div>
			</div>
		);
	}
}

export default Portfolio;
