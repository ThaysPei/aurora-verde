import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from '../components/Testimonials';

describe('Testimonials', () => {
  it('renderiza o título da seção', () => {
    render(<Testimonials />);
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument();
  });

  it('renderiza os 6 depoimentos', () => {
    render(<Testimonials />);
    const cards = document.querySelectorAll('.testimonial-card');
    expect(cards).toHaveLength(6);
  });

  it('renderiza pelo menos um nome de cliente', () => {
    render(<Testimonials />);
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
  });
});
