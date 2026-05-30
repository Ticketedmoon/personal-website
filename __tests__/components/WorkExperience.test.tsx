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
      /Microsoft \(Jan 2025/,
      /Shutterstock \(Jan 2022/,
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
    expect(screen.getAllByText(/Software Development Engineer II/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Software Engineer (Search)').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Software Engineer (Product/Tooling)').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Software Engineer Intern').length).toBeGreaterThanOrEqual(1);
  });

  it('links to company websites where available', () => {
    const microsoftLink = screen.getByRole('link', { name: /microsoft\.com/i });
    expect(microsoftLink).toHaveAttribute('href', 'https://www.microsoft.com/');

    const shutterstockLink = screen.getByRole('link', { name: /shutterstock\.com/i });
    expect(shutterstockLink).toHaveAttribute('href', 'https://www.shutterstock.com/');

    const brightflagLink = screen.getByRole('link', { name: /brightflag\.com/i });
    expect(brightflagLink).toHaveAttribute('href', 'https://www.brightflag.com/');
  });
});
