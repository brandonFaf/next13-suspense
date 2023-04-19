'use client';
import { callApi, statusState } from '@/state/statusState';
import zapState from '@/state/zapState';
import { Suspense, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const stepStyle = {
  display: 'flex',
  gap: 45,
  paddingBlock: 10,
  paddingInline: 5,
  border: '1px solid white',
};
const stepContainerStyle = {
  display: 'flex',
  gap: 25,
};

const Steps = () => {
  const steps = useRecoilValue(zapState);
  console.log('steps:', steps);
  return (
    <div style={{ ...stepContainerStyle, flexDirection: 'column' }}>
      <h1>Zap</h1>
      {steps.map(step => (
        <div style={stepStyle} key={step.id}>
          <div>{step.title}</div>
          <Suspense fallback={<div>Loading Status...</div>}>
            <Status id={step.id}></Status>
          </Suspense>
        </div>
      ))}
    </div>
  );
};
const Status = ({ id }: { id: number }) => {
  console.log('rendering and getting status');
  const status = useRecoilValue(statusState(id));
  return <div>{status}</div>;
};

export default Steps;
