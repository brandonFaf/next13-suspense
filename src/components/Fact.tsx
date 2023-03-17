import textState from '@/state/zapState';
import { useRecoilState, useRecoilValue } from 'recoil';
const callApi = async (): Promise<{ fact: string }> => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ fact: 'cat fact goes here' }), 1000);
  });
};
const Fact = async () => {
  const asyncCall = await callApi();
  return (
    <>
      <div>{asyncCall.fact}</div>
    </>
  );
};

export default Fact;
