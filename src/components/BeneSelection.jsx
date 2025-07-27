import React from "react";
import "./BeneSelection.css";
import truck from "../assets/truck.png";
import headset from "../assets/headset.png";
import box from "../assets/box.png";
import bolsa from "../assets/bolsa.png";

function BeneSelection() {
  return (
    <section className="benefits">
      <div className="benefit-card">
        <img src={truck} alt="Frete Grátis" />
        <div>
          <h4>Frete Grátis</h4>
          <p>Enviamos sem custo para todo o Brasil</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src={headset} alt="Suporte" />
        <div>
          <h4>Atendimento 24/7</h4>
          <p>Suporte disponível sempre que você precisar</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src={box} alt="Pagamento Seguro" />
        <div>
          <h4>Pagamento Seguro</h4>
          <p>Transações protegidas e criptografadas</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src={bolsa} alt="Garantia" />
        <div>
          <h4>Satisfação Garantida</h4>
          <p>Ou seu dinheiro de volta em até 30 dias</p>
        </div>
      </div>
    </section>
  );
}

export default BeneSelection;
