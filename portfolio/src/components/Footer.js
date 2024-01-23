import Socials from "./Socials";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer title="footer-img" className="footer-container bg-img-footer">
      <div className="left-footer-section">
        <h1>Contact</h1>
        <form action="submit-form" method="post">
          {/* Formulär */}
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="namn..."
            autoComplete="name"
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exempel@hotmail.com"
            autoComplete="email"
            required
          />

          <label htmlFor="message">Meddelande:</label>
          <textarea
            id="message"
            name="message"
            placeholder="meddelande..."
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right-footer-section">
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
