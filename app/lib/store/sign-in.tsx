/** @format */

import { create } from "zustand";

type StepState = "sign-in" | "verify-code" | "successfully";

interface SignInStoreState {
  email: string;
  password: string;
  code: string;
  step: StepState;
  expireAt: string;
  setEmail(value: string): void;
  setPassword(value: string): void;
  setCode(value: string): void;
  setStep(value: string): void;
  setExpiresAt(value: string): void;
}
const useSignInStore = create<SignInStoreState>((set) => {
  return {
    email: "",
    password: "",
    code: "",
    step: "sign-in",
    expireAt: "",
    setEmail: (value: string) => set({ email: value }),
    setPassword: (value: string) => set({ password: value }),
    setCode: (value: string) => set({ code: value }),
    setStep: (value: StepState) => set({ step: value }),
    setExpiresAt: (value: string) => set({ expireAt: value }),
  };
});

export { useSignInStore };
