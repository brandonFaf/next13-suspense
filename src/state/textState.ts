import { atom, selector } from 'recoil';

const callApi = (): Promise<{ fact: string }> => {
  return fetch('https://catfact.ninja/fact').then(
    res => res.json() as Promise<{ fact: string }>
  );
};

const textState = selector({
  key: 'textState',
  get: () => {
    return callApi();
  },
});

export default textState;
