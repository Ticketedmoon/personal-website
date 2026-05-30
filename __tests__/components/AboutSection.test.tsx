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
    expect(screen.getByText('Hobbies and Interests')).toBeInTheDocument();
    expect(screen.getByText('Aspirations and Career Goals')).toBeInTheDocument();
  });

  it('contains key biographical content', () => {
    expect(screen.getByText(/Dublin, Ireland/)).toBeInTheDocument();
    expect(screen.getAllByText(/Computer Science/).length).toBeGreaterThanOrEqual(1);
  });

  it('links to Microsoft', () => {
    const link = screen.getByRole('link', { name: /microsoft/i });
    expect(link).toHaveAttribute('href', 'https://www.microsoft.com/');
  });

  it('renders three about rows with images', () => {
    const { container } = render(<AboutSection />);
    const images = container.querySelectorAll('[class*="rowImage"]');
    expect(images.length).toBeGreaterThanOrEqual(3);
  });
});
