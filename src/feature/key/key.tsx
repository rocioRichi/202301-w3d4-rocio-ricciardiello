type KeyProp = { keyText: string };

function Key({ keyText }: KeyProp) {
  return (
    <li>
      <button className="key">{keyText}</button>
    </li>
  );
}
export default Key;
