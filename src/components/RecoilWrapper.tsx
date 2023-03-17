'use client';
import { Step } from '@/app/hello/page';
import zapState from '@/state/zapState';
import { RecoilRoot } from 'recoil';

interface Props extends React.PropsWithChildren {
  zap: Step[];
}

const RecoilWrapper = ({ zap, children }: Props) => {
  return (
    <RecoilRoot
      initializeState={snapshot => {
        snapshot.set(zapState, zap);
      }}
    >
      {children}
    </RecoilRoot>
  );
};

export default RecoilWrapper;
