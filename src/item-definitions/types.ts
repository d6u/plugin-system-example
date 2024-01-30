export enum ItemType {
  One,
  Two,
}

export type FieldDefinition =
  | {
      type: "string";
      name: string;
    }
  | {
      type: "select" | "radio";
      name: string;
      options: string[];
    }
  | {
      type: "number";
      name: string;
    };

export type ItemDefinition = {
  type: ItemType;
  fields: FieldDefinition[];
};
