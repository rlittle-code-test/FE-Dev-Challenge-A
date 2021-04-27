import { useEffect } from 'react';
import { JobPostings } from '../types';

async function loadDataFile(setFn: (data: JobPostings) => void) {
  const file = await fetch('data.json');
  const data = await file.json();
  setFn(data);
}

/** Load job postings from `data.json` file */
export function useLoadData(onLoad: (data: JobPostings) => void) {
  useEffect(() => {
    loadDataFile(onLoad);
  }, []);
}

export default useLoadData;
