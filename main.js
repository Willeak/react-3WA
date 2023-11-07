function NameForm() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (e) => {
    alert("Le nom a été soumis : " + value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom
        <br />
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function EssayForm() {
  const [value2, setValue2] = React.useState(
    "Écrivez un essai à propos de votre élément du DOM préféré"
  );

  const handleChange = (event) => {
    setValue2(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (e) => {
    alert("Le nom a été soumis : " + value2);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay
        <br />
        <textarea value={value2} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function FlavorForm() {
  const [value3, setValue3] = React.useState("");

  const handleChange = (event) => {
    setValue3(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    alert("Le nom a été soumis : " + value3);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez votre parfum favori
        <br />
        <select value={value3} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

function AllForm() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState(
    "Écrivez un essai à propos de votre élément du DOM préféré"
  );
  const [value3, setValue3] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);

    console.log(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (e) => {
    alert(
      `Le nom a été soumis : ${value}\nL'essay' a été soumis : ${value2}\nLe parfum a été soumis : ${value3}`
    );
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom
        <br />
        <input type="text" value={value} onChange={handleChange} />
      </label>

      <label>
        Essay
        <br />
        <textarea value={value2} onChange={handleChange2} />
      </label>
      <label>
        Choisissez votre parfum favori
        <br />
        <select value={value3} onChange={handleChange3}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

ReactDOM.render(
  <React.Fragment>
    <div className="row">
      <NameForm />
      <EssayForm />
      <FlavorForm />
    </div>

    <AllForm />
  </React.Fragment>,
  document.querySelector("#app")
);
