import { ItemDefinition, ItemType } from "./types";

const ONE_DEFINITION: ItemDefinition = {
  type: ItemType.One,
  fields: [
    {
      type: "string",
      name: "name1",
    },
    {
      type: "number",
      name: "name2",
    },
  ],
};

const TWO_DEFINITION: ItemDefinition = {
  type: ItemType.Two,
  fields: [
    {
      type: "select",
      name: "name1",
      options: ["A", "B"],
    },
    {
      type: "radio",
      name: "name2",
      options: ["a", "b"],
    },
  ],
};

const itemDefinitionMap = {
  [ItemType.One]: ONE_DEFINITION,
  [ItemType.Two]: TWO_DEFINITION,
};

export function getItemDefinition(type: ItemType): ItemDefinition {
  return itemDefinitionMap[type];
}
