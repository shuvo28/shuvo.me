import { create } from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  name: "",
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
  setName: () => set(() => ({ name: "shuvo" })),
  clearName: () => set(() => ({ name: "" })),
}));
