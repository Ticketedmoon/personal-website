import { render, screen } from '@testing-library/react';
import ValuesSection from '@/components/ValuesSection/ValuesSection';

describe('ValuesSection', () => {
  beforeEach(() => {
    render(<ValuesSection />);
  });

  it('renders the section title', () => {
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Values');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('For Life');
  });

  it('renders all four values', () => {
    expect(screen.getByText('Happiness')).toBeInTheDocument();
    expect(screen.getByText('Passions')).toBeInTheDocument();
    expect(screen.getByText('Modesty')).toBeInTheDocument();
    // "Values" appears in both the title and as a value keyword,
    // so we check for the specific surrounding text
    expect(screen.getByText(/Stand by your/)).toBeInTheDocument();
  });

  it('renders floating animation circles', () => {
    const { container } = render(<ValuesSection />);
    const circles = container.querySelectorAll('[class*="circles"] li');
    expect(circles).toHaveLength(10);
  });
});
