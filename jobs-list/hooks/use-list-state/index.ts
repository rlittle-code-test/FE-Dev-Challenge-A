import { useReducer } from 'react';
import { Actions, TActionTypes } from './actions';
import { InitialState, JobListState } from './state';
export * from './actions';
export * from './state';
export type JobListReducerAction = {
  type: keyof TActionTypes;
  data?: any;
};

/** Apply actions to app state based on action type */
function reducer(state: JobListState, action: JobListReducerAction) {
  const act = Actions[action.type];
  const update = act(state, action.data);
  return { ...state, ...update };
}

/**
 * Reducer hook for list of posts and filter state
 */
export function useListState(): [
  JobListState,
  React.Dispatch<JobListReducerAction>
] {
  return useReducer(reducer, InitialState);
}
export default useListState;
