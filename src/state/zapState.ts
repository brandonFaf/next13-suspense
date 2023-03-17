import { Step } from '@/app/hello/page';
import { atom } from 'recoil';

const zapState = atom<Step[]>({
  key: 'zapState',
  default: [],
});

export default zapState;
