import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Form Submitted!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
