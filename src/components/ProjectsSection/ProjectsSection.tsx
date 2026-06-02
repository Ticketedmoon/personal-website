import styles from './ProjectsSection.module.css';
import ProjectsTabs from './ProjectsTabs';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
}

export interface ProjectCard {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  stars: number;
  language: string | null;
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Python: '#3572a5',
  Odin: '#60AFFE',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Makefile: '#427819',
};

const toolRepos = [
  'react-grid-draw-ui',
  'human-activity-recognition-using-wrist-mounted-sensors-based-on-symbolic-aggregate-approximation',
  'line-segment-light-visibility-system',
  'reddit-thread-text-analyser',
  'party-up',
  'birdie-bets',
  'distributed-booking-system-with-spring',
  'weather-as-a-service',
  'wave-motion',
  'simple-game-lookup-system',
  'samurai',
  'pokemon-search-api',
  'rocket-league-tournament-predictor',
  'dna-data-analysis-repl',
  'opengl-haven',
  'triforce-gl-visualisation',
  'stripeful',
];

const gameRepos = [
  'crucible',
  'merciless-mario',
  'vanquish',
  'space-arena-online',
  'reverie',
  'brick-breaker-extreme',
  'primitive-wars',
  'line-rider-gauntlet',
  'snake-game-hacktoberfest',
];

function formatRepoName(name: string): string {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function fetchRepos(): Promise<{ tools: ProjectCard[]; games: ProjectCard[] }> {
  const res = await fetch(
    'https://api.github.com/users/Ticketedmoon/repos?per_page=100&sort=updated',
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return { tools: [], games: [] };
  }

  const repos: GitHubRepo[] = await res.json();

  const repoMap = new Map<string, GitHubRepo>();
  for (const repo of repos) {
    repoMap.set(repo.name, repo);
  }

  const tools: ProjectCard[] = [];
  const games: ProjectCard[] = [];

  for (const name of toolRepos) {
    const repo = repoMap.get(name);
    if (repo) {
      tools.push({
        name: formatRepoName(repo.name),
        description: repo.description || '',
        url: repo.html_url,
        homepage: repo.homepage || null,
        stars: repo.stargazers_count,
        language: repo.language,
      });
    }
  }

  for (const name of gameRepos) {
    const repo = repoMap.get(name);
    if (repo) {
      games.push({
        name: formatRepoName(repo.name),
        description: repo.description || '',
        url: repo.html_url,
        homepage: repo.homepage || null,
        stars: repo.stargazers_count,
        language: repo.language,
      });
    }
  }

  return { tools, games };
}

export { languageColors };

export default async function ProjectsSection() {
  const { tools, games } = await fetchRepos();

  return (
    <div id="projects" className={styles.wrapper}>
      <span className={styles.sectionTitle}>My Projects</span>
      <ProjectsTabs tools={tools} games={games} />
    </div>
  );
}
