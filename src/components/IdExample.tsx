"use client";

import { Suspense } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { idState, useIdState } from "@/state/idState";

export const dynamic = "force-dynamic";

const IdComponent = ({ id }: { id: string }) => {
  const idData = useRecoilValue(idState(id));

  return <div>{idData}</div>;
};

const IdComponentThatUsesEffectHook = ({ id }: { id: string }) => {
  const idData = useIdState(id);

  return <div>{idData}</div>;
};

export const IdExample = ({ id }: { id: string }) => (
  <RecoilRoot>
    <h1>Uses recoil selector</h1>
    <Suspense fallback={<div>loading id data from recoil…</div>}>
      <IdComponent id={id} />
    </Suspense>
    <h1>Uses useEffect hook</h1>
    <Suspense fallback={<div>loading id data from useEffect hook…</div>}>
      <IdComponentThatUsesEffectHook id={id} />
    </Suspense>
  </RecoilRoot>
);
