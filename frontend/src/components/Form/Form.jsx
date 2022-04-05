import "./Form.css";

function Form() {
  function onSubmit(e) {
    e.preventDefault();
    console.log("Form.jsx -> onSubmit");
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="name">Firstname</label>
      <input type="text" id="name" />

      <label htmlFor="name">Lastname</label>
      <input type="text" id="name" />

      <label htmlFor="name">City</label>
      <input type="text" id="name" />

      <button>Submit form</button>
    </form>
  );
}

export default Form;
