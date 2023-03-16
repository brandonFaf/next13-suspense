import AnotherFact from '@/components/AnotherFact';
import Fact from '@/components/Fact';
import RecoilWrapper from '@/components/RecoilWrapper';
import { Suspense } from 'react';

const Page = async () => {
  return (
    <div>
      Hello from server components
      <RecoilWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Fact />
        </Suspense>
      </RecoilWrapper>
      <AnotherFact />
    </div>
  );
};

export default Page;
