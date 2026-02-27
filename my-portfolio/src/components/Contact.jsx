import "./App.css";

export default function Contact() {
    return (
        <section id="contact" style={{ padding: "40px 20px" }}>
            <h2>Contact</h2>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <textarea placeholder="Message" />
                <button type="button">Submit</button>
            </form>
        </section>
    );
}
