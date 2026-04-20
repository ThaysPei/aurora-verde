import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Cliente desde 2023',
    text: 'A Aurora Verde transformou minha experi├¬ncia de compra! Produtos incr├¡veis e entrega super r├ípida. Recomendo a todos!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Cliente desde 2024',
    text: 'Qualidade excepcional e atendimento nota 10. Encontrei tudo que procurava com pre├ºos justos. Virei cliente fiel!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Cliente desde 2023',
    text: 'Melhor loja online que j├í utilizei. A variedade de produtos ├® impressionante e a qualidade sempre surpreende.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Cliente desde 2024',
    text: 'Compro mensalmente e nunca me decepcionei. O suporte ao cliente ├® fant├ístico e os produtos chegam sempre perfeitos.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 5,
    name: 'Ana Paula Silva',
    role: 'Cliente desde 2023',
    text: 'Produtos sustent├íveis de verdade! Finalmente uma loja que se preocupa com o meio ambiente e com a qualidade.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Cliente desde 2024',
    text: 'Entrega r├ípida, embalagem impec├ível e produtos de primeira qualidade. N├úo troco por nenhuma outra!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Depoimentos de clientes">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>Real feedback from our valued customers</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonial.avatar}
                alt={`Foto de ${testimonial.name}`}
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>

            <div className="testimonial-stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>

            <p className="testimonial-text">"{testimonial.text}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
