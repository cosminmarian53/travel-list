const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear", quantity: 12, packed: false },
];
export default function App() {
  return (
    <>
      <div className="App">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <h1>🌴 Travel Tour 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your future trip?🤩</h3>
      <form>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}></option>
          ))}
        </select>
        <input type="text" placeholder="Item..." />
        <button>Add</button>
      </form>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li
      key={item.id}
      style={item.packed ? { textDecoration: "line-through" } : {}}
    >
      <span>
        {item.description}, {item.quantity}
      </span>
      <button>❌&times;</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list, and packed %X </em>
    </footer>
  );
}
