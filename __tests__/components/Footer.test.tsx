import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer/Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the sign-off text', () => {
    expect(screen.getByText('Shane')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Love')).toBeInTheDocument();
  });

  it('renders email contact link', () => {
    const email = screen.getByLabelText('Email');
    expect(email).toHaveAttribute('href', 'mailto:shane.creedon3@mail.dcu.ie?subject=?');
  });

  it('renders Twitter contact link', () => {
    const twitter = screen.getByLabelText('Twitter');
    expect(twitter).toHaveAttribute('href', 'https://twitter.com/shane_creedon');
  });

  it('renders Steam contact link', () => {
    const steam = screen.getByLabelText('Steam');
    expect(steam).toHaveAttribute(
      'href',
      'https://steamcommunity.com/profiles/76561198059760208/'
    );
  });

  it('has the footer-links-wrapper id for anchor navigation', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('#footer-links-wrapper')).toBeInTheDocument();
  });
});
