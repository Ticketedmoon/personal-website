import { render, screen } from '@testing-library/react';
import WorkExperience from '@/components/WorkExperience/WorkExperience';

describe('WorkExperience', () => {
  beforeEach(() => {
    render(<WorkExperience />);
  });

  it('renders the section title', () => {
    expect(screen.getByText('My Work Experience')).toBeInTheDocument();
  });

  it('renders all job entries', () => {
    const companies = [
      /Shutterstock \(Current\)/,
      /Brightflag \(2 Years/,
      /Bloomberg Polarlake \(6 Months\)/,
      /Christopher's Furniture Services \(3 Months\)/,
      /Hemingway's Seafood Restaurant \(2 Years\)/,
      /Spar Retail Store \(1 Year\)/,
    ];
    companies.forEach((pattern) => {
      expect(screen.getByText(pattern)).toBeInTheDocument();
    });
  });

  it('renders job roles', () => {
    expect(screen.getByText('Software Engineer (Search)')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer (Product/Tooling)')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer Intern')).toBeInTheDocument();
  });

  it('links to company websites where available', () => {
    const shutterstockLink = screen.getByRole('link', { name: /shutterstock\.com/i });
    expect(shutterstockLink).toHaveAttribute('href', 'https://www.shutterstock.com/');

    const brightflagLink = screen.getByRole('link', { name: /brightflag\.com/i });
    expect(brightflagLink).toHaveAttribute('href', 'https://www.brightflag.com/');
  });
});
