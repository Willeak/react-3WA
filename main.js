function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("app"));
}
setInterval(tick, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector("#app"));
