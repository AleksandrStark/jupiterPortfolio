import { createSlice } from '@reduxjs/toolkit';
import { projects } from './projects';

const initialState = {
	filters: ['Show all', 'Designs', 'Branding', 'Illustrations', 'Motion'],
	projects: projects,
	demonstration: projects,
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		getFiltered: (state, action) => {
			state.demonstration = state.projects.filter((proj) => {
				return action.payload === 'Show all'
					? true
					: proj.category === action.payload;
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { getFiltered } = filterSlice.actions;

export default filterSlice.reducer;
