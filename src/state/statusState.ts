import { selector, selectorFamily } from 'recoil';

export const callApi = async (id: number): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('resolving');
      if (typeof window === 'undefined') {
        resolve('server');
      } else {
        resolve(id % 2 == 0 ? '✅' : '⚠️');
      }
    }, 2000);
  });
};

export const statusState = selectorFamily<string, number>({
  key: 'statusState',
  get: id => async () => {
    console.log('calling api');
    const status = await callApi(id);
    return status;
  },
});

export const zapStatusState = selector<string>({
  key: 'statusState',
  get: async () => {
    const status = await callApi(1);
    return status;
  },
});
