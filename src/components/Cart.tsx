interface Props {
  cartItems: string[];
  onClear: () => void;
}

export default function Cart({cartItems, onClear}: Props) {
  return (<>
    <div>Cart</div>
    <ul>
      {cartItems.map(item => <li key={item}>{item}</li>)}
      <button onClick={onClear}>Clear</button>
    </ul>
  </>);
}