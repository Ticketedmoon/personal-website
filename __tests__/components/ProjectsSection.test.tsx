import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsTabs from '@/components/ProjectsSection/ProjectsTabs';

const mockTools = [
  {
    name: 'React Grid Draw Ui',
    description: 'A public React NPM library',
    url: 'https://github.com/Ticketedmoon/react-grid-draw-ui',
    homepage: null,
    stars: 13,
    language: 'TypeScript',
  },
  {
    name: 'Samurai',
    description: 'A search catalog for games',
    url: 'https://github.com/Ticketedmoon/samurai',
    homepage: null,
    stars: 0,
    language: 'Java',
  },
];

const mockGames = [
  {
    name: 'Space Arena Online',
    description: 'An online multiplayer space game',
    url: 'https://github.com/Ticketedmoon/space-arena-online',
    homepage: null,
    stars: 3,
    language: 'JavaScript',
  },
];

describe('ProjectsTabs', () => {
  beforeEach(() => {
    render(<ProjectsTabs tools={mockTools} games={mockGames} />);
  });

  it('renders tab buttons with counts', () => {
    expect(screen.getByText('Services & Tools (2)')).toBeInTheDocument();
    expect(screen.getByText('Games (1)')).toBeInTheDocument();
  });

  it('shows tools by default', () => {
    expect(screen.getByText('React Grid Draw Ui')).toBeInTheDocument();
    expect(screen.getByText('Samurai')).toBeInTheDocument();
    expect(screen.queryByText('Space Arena Online')).not.toBeInTheDocument();
  });

  it('switches to games tab on click', () => {
    fireEvent.click(screen.getByText('Games (1)'));
    expect(screen.getByText('Space Arena Online')).toBeInTheDocument();
    expect(screen.queryByText('React Grid Draw Ui')).not.toBeInTheDocument();
  });

  it('shows star count for repos with stars', () => {
    expect(screen.getByText('⭐ 13')).toBeInTheDocument();
  });

  it('shows language with coloured dot', () => {
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
  });
});
