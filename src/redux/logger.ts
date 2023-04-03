import React from "react";
export const myLogger = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info("dispatch.....", action);
  let result = next(action);
  return result;
};