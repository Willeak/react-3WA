function App() {
  const [decimalValue, setDecimalValue] = React.useState(0);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setDecimalValue(newValue);
    }
  };

  return (
    <div>
      <BaseNumberInput onChangeBase={handleChange} />
      <BaseNumberInput value={decimalValue.toString(2)} />
    </div>
  );
}

function BaseNumberInput(props) {
  return (
    <input type="number" onChange={props.onChangeBase} value={props.value} />
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
