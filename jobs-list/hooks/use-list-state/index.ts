import { useReducer } from 'react';
import { Actions, TActionTypes } from './actions';
import { InitialState, JobListState } from './state';
export * from './actions';
export * from './state';
export type JobListReducerAction = {
  type: keyof TActionTypes;
  data?: any;
};

function reducer(state: JobListState, action: JobListReducerAction) {
  const act = Actions[action.type];
  const update = act(state, action.data);
  return { ...state, ...update };
}

export function useListState(): [
  JobListState,
  React.Dispatch<JobListReducerAction>
] {
  return useReducer(reducer, InitialState);
}
export default useListState;
