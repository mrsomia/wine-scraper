

export interface ItemProps {
  name: string;
  id: number;
  urlsId: number;
  prices: [
    {
      dateTime: string;
      id: number;
      itemId: number;
      supervalu: number | null;
      tesco: number | null;
      dunnes: number | null;
    }
  ];
}
export function Item(props: ItemProps): JSX.Element {
  return (
    <div className="item">
      <h3>{props.name}</h3>
      <div>
        <span>{"name of store"}</span>
        <span>€ {9.6.toString()}</span>
      </div>
    </div>
  );
}

export default Item