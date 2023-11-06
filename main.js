const lastName = React.createElement(
  "span",
  { className: "mycolor" },
  "ducatez".toUpperCase()
);

const firstName = React.createElement(
  "span",
  {},
  "calvin".charAt(0).toUpperCase() + "calvin".slice(1)
);

const element = (
  <p>
    Bonjour, {lastName} {firstName}
  </p>
);

ReactDOM.render(element, document.querySelector("#app"));
