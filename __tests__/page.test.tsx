import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

// Mock all components to verify they are composed on the page
jest.mock('@/components/NavigationMenu/NavigationMenu', () => {
  return function MockNav() { return <div data-testid="nav" />; };
});
jest.mock('@/components/HeroSection/HeroSection', () => {
  return function MockHero() { return <div data-testid="hero" />; };
});
jest.mock('@/components/AboutSection/AboutSection', () => {
  return function MockAbout() { return <div data-testid="about" />; };
});
jest.mock('@/components/TechGrid/TechGrid', () => {
  return function MockTech() { return <div data-testid="tech" />; };
});
jest.mock('@/components/SocialLinks/SocialLinks', () => {
  return function MockSocial() { return <div data-testid="social" />; };
});
jest.mock('@/components/WorkExperience/WorkExperience', () => {
  return function MockWork() { return <div data-testid="work" />; };
});
jest.mock('@/components/ProjectsSection/ProjectsSection', () => {
  return function MockProjects() { return <div data-testid="projects" />; };
});
jest.mock('@/components/ValuesSection/ValuesSection', () => {
  return function MockValues() { return <div data-testid="values" />; };
});
jest.mock('@/components/Footer/Footer', () => {
  return function MockFooter() { return <div data-testid="footer" />; };
});
jest.mock('@/components/ScrollReveal/ScrollReveal', () => {
  return function MockScrollReveal({ children }: { children: React.ReactNode }) { return <>{children}</>; };
});

describe('HomePage', () => {
  it('renders all sections in correct order', () => {
    const { container } = render(<HomePage />);

    const sections = [
      'nav', 'hero', 'about', 'tech', 'projects', 'work', 'social', 'values', 'footer'
    ];

    sections.forEach((id) => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });

    // Verify order
    const elements = container.querySelectorAll('[data-testid]');
    const order = Array.from(elements).map((el) => el.getAttribute('data-testid'));
    expect(order).toEqual(sections);
  });

  it('renders copyright notice with current year', () => {
    render(<HomePage />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year} Shane Creedon`))).toBeInTheDocument();
  });
});
