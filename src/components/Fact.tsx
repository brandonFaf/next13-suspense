'use client';

import textState from '@/state/textState';
import { useRecoilState, useRecoilValue } from 'recoil';

const Fact = () => {
  const state = useRecoilValue(textState);
  return (
    <>
      <div>Fact {state.fact}</div>
    </>
  );
};

export default Fact;
