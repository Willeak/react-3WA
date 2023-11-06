function FirstName(props) {
  const { firstName } = props;
  const capitalizedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);

  return <span>{capitalizedFirstName}</span>;
}

function LastName(props) {
  const { lastName } = props;
  const upperCaseLastName = lastName.toUpperCase();

  return <span className="red-text">{upperCaseLastName}</span>;
}

const lastName = "ducatez";
const firstName = "calvin";

const helloWorld = (
  <p>
    Hello <LastName lastName={lastName} /> <FirstName firstName={firstName} />
  </p>
);

ReactDOM.render(helloWorld, document.querySelector("#app"));
