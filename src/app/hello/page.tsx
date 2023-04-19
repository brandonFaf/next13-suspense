import EditorContainer from '@/components/EditorContainer';
import RecoilWrapper from '@/components/RecoilWrapper';
import Sidebar from '@/components/Sidebar';
import Steps from '@/components/Steps';
import { Step } from '@/state/types';
import { Suspense } from 'react';
import styles from '../page.module.css';

export const dynamic = 'force-dynamic';

const Page = async () => {
  const zap = {
    steps: [
      { title: 'First Step', id: 1 },
      { title: 'Second Step', id: 2 },
    ],
  };
  return (
    <div>
      <RecoilWrapper zap={zap.steps}>
        <EditorContainer />
      </RecoilWrapper>
    </div>
  );
};

export default Page;
