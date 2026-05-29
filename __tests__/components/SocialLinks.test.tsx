import { render, screen } from '@testing-library/react';
import SocialLinks from '@/components/SocialLinks/SocialLinks';

describe('SocialLinks', () => {
  beforeEach(() => {
    render(<SocialLinks />);
  });

  it('renders the section title', () => {
    expect(screen.getByText('Social Media Links')).toBeInTheDocument();
  });

  it('renders links to GitHub, LinkedIn, and YouTube', () => {
    const github = screen.getByLabelText('GitHub');
    expect(github).toHaveAttribute('href', 'https://github.com/Ticketedmoon');

    const linkedin = screen.getByLabelText('LinkedIn');
    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/shane-creedon-49a142128/'
    );

    const youtube = screen.getByLabelText('YouTube');
    expect(youtube).toHaveAttribute(
      'href',
      'https://www.youtube.com/channel/UCP2hCkdDohDOsrHyeDGV5Xw'
    );
  });
});
