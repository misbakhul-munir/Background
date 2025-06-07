import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "🔨",
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? "dark" : ""}`}>
        <div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center ">
            <img src="/Orang.png" className="avatar" alt="" />
            <div className="bg_content rd_12 p_8">
              <h1>Misbakhul Munir</h1>
              <p className="mt-16">Programmer</p>
              <Typist cursor={config_cursor}>Full Stack Developer | | AI Engineer</Typist>
            </div>

            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="highlight">Next JS</span>
                <span className="highlight">React JS</span>
                <span className="highlight">Vue JS</span>
                <span className="highlight">TypeScript</span>
                <span className="highlight">JavaScript</span>
                <span className="highlight">Node JS</span>
                <span className="highlight">MySql</span>
                <span className="highlight">Phyton</span>
                <span className="highlight">Cloud Azure</span>
                <span className="highlight">Flutter</span>
                <span className="highlight">Tailwind CSS</span>
                <span className="highlight">Svelte</span>
                <span className="highlight">Deepseek</span>
                <span className="highlight">AWS</span>
                <span className="highlight">Mongo DB</span>
                <span className="highlight">Exspress JS</span>
                <span className="highlight">PHP</span>
                <span className="highlight">Golang</span>
                <span className="highlight">Kotlin</span>
                <span className="highlight">Laravel</span>
                <span className="highlight">Goggle Cloud</span>
                <span className="highlight">Java</span>
                <span className="highlight">Git</span>
                <span className="highlight">Angular</span>
                <span className="highlight">JQuery</span>
                <span className="highlight">Android IOS</span>
                <span className="highlight">API</span>
                <span className="highlight">HTML5</span>
                <span className="highlight">PostgreSql</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/mizbahlmnr/.">
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.tiktok.com">
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.youtube.com">
              <FiYoutube />
              <span>Youtube</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/misbakhul-munir/.">
              <FaGithub />
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://discord.com/login">
              <FaDiscord />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
