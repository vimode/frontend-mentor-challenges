import { useState, useEffect } from "react";


const initialValue = {
  name: "",
  email: "",
  phone: "",
  plan: {
    type: "",
    period: "",
  },
  addons: {
  },
};

function getLocalStorageData(key,initValue = initialValue) {
  const localValue = window.localStorage.getItem(key);
  const saved = JSON.parse(localValue)
  return saved || initValue;
 }

export const useLocalStorageData = (key,initValue )  => {
  const [ savedData, setSavedData ] = useState(() => {
     return getLocalStorageData(key, initValue)
  })

  useEffect(() => {
    if(savedData !== null && savedData !== undefined ) {
    window.localStorage.setItem(key,JSON.stringify(savedData))
    }
  }, [key,savedData]);

  return [savedData, setSavedData]
}

