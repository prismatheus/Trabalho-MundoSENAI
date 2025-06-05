import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ textColor, bgColor, linkColor }) => {
  return (
    <footer className="app-footer" style={{ color: textColor, backgroundColor: bgColor }}>
      <p><span className="label">Alunos:</span> Matheus Fontoura, Fernando, Lucas Eli, Luan, João Marques</p>
      <p>
        <span className="label">Descrição:</span> Sistema completo com API e interface web para gerenciamento de tarefas.
      </p>
    </footer>
  );
};

export default Footer;
