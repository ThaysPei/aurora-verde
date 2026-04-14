import './Sale.css';
import imgsale1 from '../assets/imgsale1.jpg';
import imgsale2 from '../assets/imgsale2.jpg';
import imgsale3 from '../assets/imgsale3.jpg';
import useCountdown from '../Hooks/useCountdown';

const saleItems = [
  { id: 1, img: imgsale1, tag: 'BEST DEALS', title: 'Sale of the Month' },
  { id: 2, img: imgsale2, tag: 'BEST DEALS', title: 'Sale of the Month' },
  { id: 3, img: imgsale3, tag: 'BEST DEALS', title: 'Sale of the Month' },
];

function Sale() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  const countdown = useCountdown(targetDate.toISOString());

  return (
    <section className="sale-container" aria-label="Promoções">
      {saleItems.map((item) => (
        <article key={item.id} className="sale-card">
          <div className="sale-content">
            <h3>{item.tag}</h3>
            <p>{item.title}</p>

            <div className="countdown">
              <span>{countdown.days}d</span>
              <span>{countdown.hours}h</span>
              <span>{countdown.minutes}m</span>
              <span>{countdown.seconds}s</span>
            </div>

            <button className="sale-button">Shop now →</button>
          </div>
          <div className="sale-image">
            <img src={item.img} alt={item.title} />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Sale;
