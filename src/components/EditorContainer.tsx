'use client';
import { callApi } from '@/state/statusState';
import React, { Suspense, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Steps from './Steps';
import Albums from './Albums';

const EditorContainer = () => {
  //   const [counter, setCounter] = useState(0);
  //   useEffect(() => {
  //     if (counter < 1) {
  //       setCounter(counter + 1);
  //     }
  //   }, [counter]);

  return (
    <div>
      <APITester />
      <Suspense fallback={<div>Loading ALbums...</div>}>
        <Albums artistId={'the-beatles'} />
      </Suspense>
      <Steps />
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>
    </div>
  );
};

export default EditorContainer;
export const APITester = () => {
  const [status, setStatus] = useState('');
  useEffect(() => {
    const callCallApi = async (id: number) => {
      console.log('callCallApi');
      const status = await callApi(id);
      console.log('status:', status, id);
      setStatus(status);
    };
    callCallApi(Math.floor(Math.random() * 100));
  }, []);

  return <div>Status: {status}</div>;
};
