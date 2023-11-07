function Clock(props) {
  React.useEffect(() => {
    tick();
  }, []);

  const [date, setDate] = React.useState(new Date());

  const tick = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  };

  const [color, setColor] = React.useState("#000");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const ChangeColor = (e) => {
    // do stuff
    const newColor = getRandomColor();
    document.querySelector("h2").style.color = newColor;
    setColor(newColor);

    console.log("random");
  };

  const ResetColor = (e) => {
    // do stuff
    document.querySelector("h2").style.color = "#000";

    console.log("black");
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h2>Il est {date.toLocaleTimeString()}.</h2>
      <button onClick={ChangeColor}>changer</button>
      <button onClick={ResetColor}>reset</button>
    </div>
  );
}

ReactDOM.render(<Clock />, document.querySelector("#app"));
