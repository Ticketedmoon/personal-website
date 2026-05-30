import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/HeroSection/HeroSection';

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it('renders the name', () => {
    expect(screen.getByText('Shane')).toBeInTheDocument();
    expect(screen.getByText('Creedon')).toBeInTheDocument();
  });

  it('renders the job title', () => {
    expect(screen.getByText('Software Development Engineer')).toBeInTheDocument();
  });

  it('renders three passion icon containers', () => {
    const { container } = render(<HeroSection />);
    const passionImages = container.querySelectorAll('[class*="passionImage"]');
    expect(passionImages).toHaveLength(3);
  });
});
