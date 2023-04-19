import RecoilWrapper from '@/components/RecoilWrapper';
import Sidebar from '@/components/Sidebar';
import Steps from '@/components/Steps';
import { Step } from '@/state/types';
import { Suspense } from 'react';
import styles from '../../page.module.css';

export const dynamic = 'force-dynamic';

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
const getZapId = (parameters: { slug: string } | undefined) => {
  if (!parameters?.slug) {
    return null;
  }

  if (!Array.isArray(parameters.slug)) {
    return null;
  }

  if (parameters.slug.length === 0) {
    return null;
  }

  return parameters.slug[0];
};
interface Props {
  params: { slug: string };
}
const Page = async ({ params }: Props) => {
  const zap = await getZap();
  const zapId = getZapId(params);

  return (
    <div>
      <RecoilWrapper zap={zap.steps}>
        <div className={styles.main}>
          {zapId && <h1>Zap {zapId}</h1>}
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
