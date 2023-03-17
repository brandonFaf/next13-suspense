'use client';
import { zapStatusState } from '@/state/statusState';
import { useRecoilValue } from 'recoil';

const Sidebar = () => {
  const status = useRecoilValue(zapStatusState);
  return (
    <div>
      <h1>Sidebar</h1>
      <div>Status - {status}</div>
    </div>
  );
};

export default Sidebar;
