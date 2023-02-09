type KeyProp = { key: string };

function Key({ key }: KeyProp) {
  return (
    <li>
      <button className="key">{key}</button>
    </li>
  );
}
export default Key;
