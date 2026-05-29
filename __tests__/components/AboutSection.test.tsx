import { render, screen } from '@testing-library/react';
import AboutSection from '@/components/AboutSection/AboutSection';

describe('AboutSection', () => {
  beforeEach(() => {
    render(<AboutSection />);
  });

  it('renders the section title', () => {
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('renders all three subsection titles', () => {
    expect(screen.getByText('My Story')).toBeInTheDocument();
    expect(screen.getByText('My Hobbies and Interests')).toBeInTheDocument();
    expect(screen.getByText('My Aspirations and Career Goals')).toBeInTheDocument();
  });

  it('contains key biographical content', () => {
    expect(screen.getByText(/Dublin, Ireland/)).toBeInTheDocument();
    expect(screen.getByText(/Computer Applications/)).toBeInTheDocument();
  });

  it('links to Shutterstock', () => {
    const link = screen.getByRole('link', { name: /shutterstock/i });
    expect(link).toHaveAttribute('href', 'https://www.shutterstock.com/');
  });

  it('renders three about rows with images', () => {
    const { container } = render(<AboutSection />);
    const images = container.querySelectorAll('[class*="rowImage"]');
    expect(images.length).toBeGreaterThanOrEqual(3);
  });
});
