'use client';

import { Suspense } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import React from 'react';

export const Data = ({ id }) => {
  const data = useRecoilValue(dataState);
  const [userData, setUserData] = useRecoilState(userState);
  const handleClick = () => {
    console.log('click');
    setUserData({
      id,
    });
  };
  return (
    <div>
      <button onClick={handleClick}>set User id</button>
      <div>id is set to: {data}</div>
    </div>
  );
};

export const Example = ({ id }) => {
  return (
    <RecoilRoot
      initializeState={snapshot => {
        console.log('initializing state');
        snapshot.set(userState, { id });
      }}
    >
      <Suspense fallback={<div>loading data from recoil…</div>}>
        <Data id={id} />
      </Suspense>
    </RecoilRoot>
  );
};

const userState = atom({
  key: 'userState',
  default: {},
});

const dataState = selector<string>({
  key: 'dataState',
  get: async ({ get }) => {
    console.log('running selector: waiting on promise');
    const id = get(userState);
    const res = await new Promise<void>(resolve => {
      setTimeout(() => {
        console.log('resolving:', id.id);
        resolve(id.id);
      }, 2000);
    });

    return res;
  },
});
