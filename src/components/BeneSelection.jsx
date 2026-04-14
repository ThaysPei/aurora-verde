import './BeneSelection.css';
import truck from '../assets/truck.png';
import headset from '../assets/headset.png';
import box from '../assets/box.png';
import bolsa from '../assets/bolsa1.png';

const benefits = [
  {
    icon: truck,
    title: 'Free Shipping',
    description: 'Free Shipping on all your order',
  },
  {
    icon: headset,
    title: 'Customer Support 24/7',
    description: 'Instant access to Support',
  },
  {
    icon: box,
    title: 'Money-Back Guarantee',
    description: '30 Days Money-Back Guarantee',
  },
  {
    icon: bolsa,
    title: '100% Secure Payment',
    description: 'We ensure your Money is save',
  },
];

function Benefits() {
  return (
    <section className="benefits" aria-label="Benefícios">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <img src={benefit.icon} alt={benefit.title} />
          <div>
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
