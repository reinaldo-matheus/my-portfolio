import { Header } from "./components/header/header";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div className="experience">
        <h3>Experience</h3>
        <p>texto</p>
        <div className="experince-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN: Intermediary</span>
            <span>ES: Intermediary</span>
            <span>🇧🇷 PT-BR: Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>texto</span>
          </div>
          <span></span>
        </div>
      </div>
      <div className="buttons">
        <div className="social">

        </div>
        <button>contact me</button>
      </div>
    

      </main>
    
  );
}
