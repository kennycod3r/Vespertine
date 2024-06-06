//https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//dinning imghttps://images.unsplash.com/photo-1580657264608-44775e61c0a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhbXBhZ25lfGVufDB8fDB8fHww
import "../App.css";
import "./main.css";

export default function Main() {
  return (
    <section className="main main-text-area">
      <div>
        <div className="img-div"><img src="https://images.unsplash.com/photo-1561065270-5c2af775b542?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlubmVyJTIwcGFydHl8ZW58MHx8MHx8fDA%3D" alt="img1"/></div>
        <div className="header-text">
          <h2>Guranteeing Better Experiencees</h2>
          <h2>
            since<i>“17”.</i>
          </h2>
        </div>
        <p className="sub-text">Just a few hours from the airport, on a green hill overlooking the sea. A small resort with a big view and a great restaurant. Here you find the true Bali.</p>
      <div className="button-container"> <button>Book a Villa</button></div>
      <div className="img-div-two"><img src="https://images.unsplash.com/photo-1695512937087-859dc39418bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZiUyMGZpcmV8ZW58MHx8MHx8fDA%3D" alt="img1"/></div>
      </div>
    </section>
  );
}
