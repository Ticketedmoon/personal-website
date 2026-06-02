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

  it('renders all 15 technology items', () => {
    const techs = ['Azure', 'AWS', 'Java', 'C#', 'Kubernetes', 'Spring Boot', 'Python', 'Docker', 'Elasticsearch', 'Nginx', 'Redis', 'C++', 'React', 'Node.js', 'Apache Solr'];
    techs.forEach((tech) => {
      expect(screen.getByRole('img', { name: tech })).toBeInTheDocument();
    });
  });
});
