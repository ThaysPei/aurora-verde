import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ImageBanner from '../components/ImageBanner';

describe('ImageBanner', () => {
  it('renderiza a imagem do banner', () => {
    render(<ImageBanner />);
    const img = screen.getByAltText('Banner promocional');
    expect(img).toBeInTheDocument();
  });

  it('renderiza dentro de uma section', () => {
    render(<ImageBanner />);
    const section = document.querySelector('.image-banner');
    expect(section).toBeInTheDocument();
  });
});
