import "./App.css";

export default function Navbar() {
    return (
        <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

        </nav>
    );
}
