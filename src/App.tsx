import { useMemo } from "react";
import "./App.css";
import { getItemDefinition } from "./item-definitions/itemDefinitions";
import { Item, useMainStore } from "./store/mainStore";

function App() {
  const items = useMainStore((state) => state.items);

  return (
    <div>
      {items.map((item, index) => {
        return <ItemBlock key={index} item={item} id={index} />;
      })}
    </div>
  );
}

function ItemBlock(props: { item: Item; id: number }) {
  const itemDefinition = useMemo(() => {
    return getItemDefinition(props.item.type);
  }, [props.item.type]);

  return (
    <div>
      <h2>{itemDefinition.type}</h2>
      <div>
        {itemDefinition.fields.map((field) => {
          switch (field.type) {
            case "string":
              return (
                <label key={field.name}>
                  {field.name}
                  <input type="text" />
                </label>
              );
            case "number":
              return (
                <label key={field.name}>
                  {field.name}
                  <input type="number" />
                </label>
              );
            case "select":
              return (
                <label key={field.name}>
                  {field.name}
                  <select>
                    {field.options.map((option) => {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </label>
              );
            case "radio":
              return (
                <div key={field.name}>
                  {field.name}
                  {field.options.map((option) => {
                    return (
                      <div key={option}>
                        <label htmlFor={`${props.id}_${field.name}_${option}`}>
                          {option}
                          <input
                            type="radio"
                            name={field.name}
                            id={`${props.id}_${field.name}_${option}`}
                            value={option}
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
          }
        })}
      </div>
    </div>
  );
}

export default App;
