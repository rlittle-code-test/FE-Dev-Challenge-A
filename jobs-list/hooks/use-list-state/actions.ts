import { JobPosting, JobPostings } from 'types';
import { JobListState } from './state';

/** Action functions keyed by `ActionTypes` */
export const Actions = {
  SET_POSTS: setPosts,
  ADD_FILTER: addFilter,
  REMOVE_FILTER: removeFilter,
  CLEAR_FILTERS: clearFilters,
};

/** Valid action types for `useListState` reducer */
export const ActionTypes = {
  SET_POSTS: 'SET_POSTS',
  ADD_FILTER: 'ADD_FILTER',
  REMOVE_FILTER: 'REMOVE_FILTER',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
} as const;
export type TActionTypes = typeof ActionTypes;

/** Helper functions to create params for a dispatch call */
export const ListStateActionCreators = {
  createSetPostsAction: (posts: JobPostings) => ({
    type: ActionTypes.SET_POSTS,
    data: posts,
  }),
  createAddFilterAction: (filter: string) => ({
    type: ActionTypes.ADD_FILTER,
    data: filter,
  }),
  createRemoveFilterAction: (filter: string) => ({
    type: ActionTypes.REMOVE_FILTER,
    data: filter,
  }),
  createClearFiltersAction: () => ({
    type: ActionTypes.CLEAR_FILTERS,
  }),
};

/** Set a generic field on the app state */
function setFields<Fields extends keyof JobListState>(
  state: JobListState,
  fields: Pick<JobListState, Fields>
): JobListState {
  return {
    ...state,
    ...fields,
  };
}

function setPosts(state: JobListState, posts: JobPostings) {
  return setFields(state, { posts });
}

/** Get a list of post IDs that have a tool or language matching on all of the filter tags */
export function getFilterPostIDs(state: JobListState, filters: string[]) {
  if (filters.length === 0) {
    return [];
  }

  return state.posts.reduce((ids: number[], post: JobPosting) => {
    if (ids.includes(post.id)) {
      return ids;
    }
    const filterables = [...post.tools, ...post.languages];
    return filters.every((filter) =>
      filterables.some((filterable) => filterable === filter)
    )
      ? [...ids, post.id]
      : ids;
  }, []);
}

/** Add a filter tag uniquely to state and update the filtered post IDs */
export function addFilter(state: JobListState, filter: string) {
  /** Do not add duplicate filters */
  if (state.filters.includes(filter)) {
    return state;
  }
  const filters = [...state.filters, filter];
  const filteredPostIds = getFilterPostIDs(state, filters);
  return setFields(state, {
    filters: [...state.filters, filter],
    filteredPostIds,
  });
}

/** Remove a filter tag by name and update the filtered post IDs */
export function removeFilter(state: JobListState, filter: string) {
  const filters = state.filters.filter((f) => f !== filter);
  const filteredPostIds = getFilterPostIDs(state, filters);
  return setFields(state, {
    filters,
    filteredPostIds,
  });
}

/** Remove all filter tags and reset filter state */
export function clearFilters(state: JobListState) {
  return setFields(state, { filters: [], filteredPostIds: [] });
}
