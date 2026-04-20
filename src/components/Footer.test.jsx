import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renderiza o t├¡tulo Aurora Verde', () => {
    render(<Footer />);
    expect(screen.getByText('Aurora Verde')).toBeInTheDocument();
  });

  it('renderiza os links de navega├º├úo', () => {
    render(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renderiza o telefone de contato', () => {
    render(<Footer />);
    expect(screen.getByText('(219) 555-0114')).toBeInTheDocument();
  });

  it('renderiza o copyright com o ano atual', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
