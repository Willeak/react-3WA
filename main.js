function UserConnected() {
  return <h1>Bienvenue !</h1>;
}

function NotLoged() {
  return <h1>Veuillez vous inscrire.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserConnected /> : <NotLoged />;
}

function LogApp() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => {
    setIsLoggedIn(true);
    console.log("tu es connecté :)");
  };

  const disconnect = () => {
    setIsLoggedIn(false);
    console.log("tu es déconnecté :(");
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <button onClick={disconnect}>Se Deconnecter</button>
      ) : (
        <button onClick={login}>Se connecter</button>
      )}
    </div>
  );
}

ReactDOM.render(<LogApp />, document.getElementById("app"));
