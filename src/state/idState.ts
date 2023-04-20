"use client";

import { useEffect, useState } from "react";
import { selectorFamily } from "recoil";

export const dynamic = "force-dynamic";

const callApi = async (id: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("resolving");
      resolve(`id is: ${id}`);
    }, 2000);
  });
};

export const useIdState = (id: string) => {
  const [idData, setIdData] = useState("loading…");

  useEffect(() => {
    const fetchIdState = async () => {
      const data = await callApi(id);
      setIdData(data);
    };

    fetchIdState();
  }, [id]);

  return idData;
};

export const idState = selectorFamily<string, string>({
  key: "idState",
  get: (id) => async () => {
    console.log("calling api");
    const status = await callApi(id);
    return status;
  },
});
