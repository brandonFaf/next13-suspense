import { atom } from 'recoil';
import { Step } from './types';

const zapState = atom<Step[]>({
  key: 'zapState',
  default: [],
});

export default zapState;
