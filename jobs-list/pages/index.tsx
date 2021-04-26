import React from 'react';
import { stitches } from '../config/stitches.config';
// Assets
import Header from '../public/images/bg-header-desktop.svg';
// Components
import Filter from 'components/list/Filter';
import JobPost from 'components/list/JobPost';
// Hooks
import useLoadData from '../hooks/use-load-data';
import useListState, {
  JobListState,
  ListStateActionCreators,
} from 'hooks/use-list-state';
// Types
import { JobPosting } from 'types';

function filterPostsFn(state: JobListState) {
  return state.filters.length > 0
    ? (post: JobPosting) => state.filteredPostIds.includes(post.id)
    : () => true;
}

const StyledHome = stitches.styled('div', {
  height: '100%',
  width: '100%',
  margin: 0,
  background: '$bluegray100',
  '& > svg': {
    width: '100%',
    background: '$blue400',
    position: 'absolute',
    top: 0,
  },
  '& main': {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateRows: '8rem',
    gridTemplateAreas: `"filters"
    "rows"`,
    position: 'absolute',
    top: 'calc(156px - 4rem)',
    width: '100%',
  },
  '& section': {
    marginY: '1rem',
    '&:first-child': { gridRow: 1, gridArea: 'filters' },
  },
  '& .JobList--posts': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gridRow: 2,
    justifyContent: 'center',
    marginY: '1rem',
    width: '100%',
  },
  variants: {
    layout: {
      desktop: {},
      mobile: {
        '& main': {
          gridTemplateRows: '12rem',
          top: 'calc(156px - 6rem)',
        },
        '& section': {
          marginY: '1.75rem',
        },
      },
    },
  },
});

export function Home() {
  const [state, dispatch] = useListState();
  useLoadData((data) =>
    dispatch(ListStateActionCreators.createSetPostsAction(data))
  );
  return (
    <StyledHome
      layout={{
        '@bp3': 'mobile',
        '@initial': 'desktop',
      }}
    >
      <Header />
      <main>
        <Filter filterTags={state.filters} dispatch={dispatch} />
        <div className="JobList--posts">
          {state.posts.filter(filterPostsFn(state)).map((post) => (
            <JobPost key={post.id} {...post} dispatch={dispatch} />
          ))}
        </div>
      </main>
    </StyledHome>
  );
}

export default Home;
