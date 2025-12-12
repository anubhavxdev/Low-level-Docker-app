import { useState } from "react";
import "./FormComponent.css";

function FormComponent() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setError("");
    try {
      const res = await fetch("http://127.0.0.1:5000/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("Thanks! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page" aria-labelledby="contact-title">
      <section className="card" role="form">
        <header className="card__header">
          <h1 id="contact-title" className="card__title">Contact Us</h1>
          <p className="card__subtitle">We usually respond within 24 hours.</p>
        </header>
        <div className="card__body">
          {status && <div className="status" role="status">{status}</div>}
          {error && <div className="error" role="alert">{error}</div>}
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label className="label" htmlFor="name">Full Name</label>
              <input
                className="input"
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="email">Email Address</label>
              <input
                className="input"
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <small className="help">We'll only use this to reply.</small>
            </div>

            <div className="field">
              <label className="label" htmlFor="message">Message</label>
              <textarea
                className="textarea"
                id="message"
                name="message"
                rows="6"
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="actions">
              <button className="button" type="submit" disabled={loading}>
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default FormComponent;
