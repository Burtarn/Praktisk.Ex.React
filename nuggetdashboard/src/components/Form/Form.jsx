function FormComponent() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Namn
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ander Andersson"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Telefon
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="070-0000000"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Meddelande
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Meddelande.."
          rows="3"
        ></textarea>
      </div>
      <button
        style={{ borderRadius: "8px" }}
        className="text-white bg-blue-900 p-2 hover:bg-blue-600"
      >
        Skicka
      </button>
    </form>
  );
}

export default FormComponent;
