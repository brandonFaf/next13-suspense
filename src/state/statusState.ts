import { selector, selectorFamily } from 'recoil';

const callApi = async (id: number): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(id % 2 == 0 ? '✅' : '⚠️'), 1000);
  });
};

export const statusState = selectorFamily<string, number>({
  key: 'statusState',
  get: id => () => {
    const status = id % 2 == 0 ? '✅' : '⚠️';
    return status;
  },
});

export const zapStatusState = selector<string>({
  key: 'statusState',
  get: () => {
    const status = '⚠️';
    return status;
  },
});
