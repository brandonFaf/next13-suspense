import { selector, selectorFamily } from 'recoil';

const callApi = async (id: number): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(id % 2 == 0 ? '✅' : '⚠️'), 1000);
  });
};

export const statusState = selectorFamily<string, number>({
  key: 'statusState',
  get: id => async () => {
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
