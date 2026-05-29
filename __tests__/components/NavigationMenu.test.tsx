import { render, screen } from '@testing-library/react';
import NavigationMenu from '@/components/NavigationMenu/NavigationMenu';

describe('NavigationMenu', () => {
  beforeEach(() => {
    render(<NavigationMenu />);
  });

  it('renders all navigation links', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('links to correct anchor sections', () => {
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#navigation-wrapper');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about-me-wrapper');
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '#projects-wrapper');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#footer-links-wrapper');
  });

  it('renders the mobile profile link', () => {
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
