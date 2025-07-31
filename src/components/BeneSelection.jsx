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
          <h4>Free Shipping</h4>
          <p>Free Shipping on all your order</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src={headset} alt="Suporte" />
        <div>
          <h4>Customer Support 24/7</h4>
          <p>Instant access to Support</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src={box} alt="Pagamento Seguro" />
        <div>
          <h4>Money-Back Guarantee</h4>
          <p>30 Days Money-Back Guarantee</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src={bolsa} alt="Garantia" />
        <div>
          <h4>100% Secure Payment</h4>
          <p>We ensure your Money is save</p>
        </div>
      </div>
    </section>
  );
}

export default BeneSelection;
