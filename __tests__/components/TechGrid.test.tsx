import { render, screen } from '@testing-library/react';
import TechGrid from '@/components/TechGrid/TechGrid';

describe('TechGrid', () => {
  beforeEach(() => {
    render(<TechGrid />);
  });

  it('renders the section title', () => {
    expect(
      screen.getByText('My Favourite Languages, Libraries and Frameworks')
    ).toBeInTheDocument();
  });

  it('renders all 9 technology items', () => {
    const techs = ['Java', 'Spring Boot', 'Python', 'SQL', 'Elasticsearch', 'Redis', 'C++', 'React', 'Node.js'];
    techs.forEach((tech) => {
      expect(screen.getByRole('img', { name: tech })).toBeInTheDocument();
    });
  });
});
