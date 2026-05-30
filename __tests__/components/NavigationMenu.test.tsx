import { render, screen, fireEvent } from '@testing-library/react';
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

  it('renders hamburger menu button', () => {
    const button = screen.getByRole('button', { name: 'Open menu' });
    expect(button).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', () => {
    const button = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(button);

    const mobileLinks = screen.getAllByText('Home');
    expect(mobileLinks.length).toBe(2);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes mobile menu when a link is clicked', () => {
    const button = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(button);

    const mobileLinks = screen.getAllByText('About');
    expect(mobileLinks.length).toBe(2);

    fireEvent.click(mobileLinks[1]);

    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBe(1);
  });
});
