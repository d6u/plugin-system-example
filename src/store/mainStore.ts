import { create } from "zustand";
import { ItemType } from "../item-definitions/types";

export type Item = {
  type: ItemType;
};

type State = {
  items: Item[];
};

export const useMainStore = create<State>()((set) => ({
  items: [
    {
      type: ItemType.One,
    },
    {
      type: ItemType.Two,
    },
    {
      type: ItemType.Two,
    },
  ],
}));
