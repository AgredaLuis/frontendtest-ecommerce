import { create } from "zustand";

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  title: "Fall Limited Edition Sneakers",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
}));
