function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      // Les données ont changé, vous pouvez effectuer des actions ici si nécessaire.
    }
  }, [data]);

  React.useEffect(() => {
    return () => {
      // Vous pouvez effectuer des nettoyages ici si nécessaire.
    };
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La requête a échoué");
        }

        return response.json();
      })
      .then((data) => {
        setData(data);

        console.log(data);
      })
      .catch((error) => {});
  };

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            <br />
            {user.email}
            <br />
            {data[0].company.name}
            <br />
            {user.phone}
            <br />
            {user.website}
            <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
