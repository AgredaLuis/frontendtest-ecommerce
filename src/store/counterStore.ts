import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterState {
  count: number;
  title: string;
  price: number
  increment: (value: number) => void;
  clear: () => void;
}

export const useCounterStore = create<CounterState>()(persist((set) => ({
  count: 0,
  price: 125.00,
  title: "Fall Limited Edition Sneakers",
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
  clear: () => set((state) => ({ count: 0 })),
}), {
  name: "product-counter"
}));
