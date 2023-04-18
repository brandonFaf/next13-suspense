import RecoilWrapper from '@/components/RecoilWrapper';
import Sidebar from '@/components/Sidebar';
import Steps from '@/components/Steps';
import { Step } from '@/state/types';
import { Suspense } from 'react';
import styles from '../page.module.css';

const getZap = async (): Promise<{ steps: Step[] }> => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          steps: [
            { title: 'First Step', id: 1 },
            { title: 'Second Step', id: 2 },
          ],
        }),
      1000
    );
  });
};

const Page = async () => {
  const zap = await getZap();
  return (
    <div>
      <RecoilWrapper zap={zap.steps}>
        <div className={styles.main}>
          <Steps />
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
          </Suspense>
        </div>
      </RecoilWrapper>
    </div>
  );
};

export default Page;
