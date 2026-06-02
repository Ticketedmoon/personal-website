'use client';

import { useState, useEffect } from 'react';
import styles from './ProjectsSection.module.css';
import { type ProjectCard, languageColors } from './ProjectsSection';

interface ProjectsTabsProps {
  tools: ProjectCard[];
  games: ProjectCard[];
}

const DESKTOP_PAGE_SIZE = 9;
const MOBILE_PAGE_SIZE = 3;
const MOBILE_BREAKPOINT = 550;

function getPageSize() {
  if (typeof window === 'undefined') return DESKTOP_PAGE_SIZE;
  return window.innerWidth <= MOBILE_BREAKPOINT ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE;
}

export default function ProjectsTabs({ tools, games }: ProjectsTabsProps) {
  const [activeTab, setActiveTab] = useState<'tools' | 'games'>('tools');
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);
  const [showCount, setShowCount] = useState(DESKTOP_PAGE_SIZE);

  useEffect(() => {
    const size = getPageSize();
    setPageSize(size);
    setShowCount(size);

    const handleResize = () => {
      const newSize = getPageSize();
      setPageSize(newSize);
      setShowCount(newSize);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allProjects = activeTab === 'tools' ? tools : games;
  const projects = allProjects.slice(0, showCount);
  const hasMore = showCount < allProjects.length;

  const switchTab = (tab: 'tools' | 'games') => {
    setActiveTab(tab);
    setShowCount(pageSize);
  };

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'tools' ? styles.activeTab : ''}`}
          onClick={() => switchTab('tools')}
        >
          Services &amp; Tools ({tools.length})
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'games' ? styles.activeTab : ''}`}
          onClick={() => switchTab('games')}
        >
          Games ({games.length})
        </button>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={styles.cardTitle}>{project.name}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.cardMeta}>
              {project.language && (
                <span className={styles.language}>
                  <span
                    className={styles.languageDot}
                    style={{
                      backgroundColor:
                        languageColors[project.language] || '#888',
                    }}
                  />
                  {project.language}
                </span>
              )}
              {project.stars > 0 && (
                <span className={styles.stars}>⭐ {project.stars}</span>
              )}
            </div>
          </a>
        ))}
      </div>

      {hasMore && (
        <button
          className={styles.loadMore}
          onClick={() => setShowCount((c) => c + pageSize)}
        >
          Show More Projects ↓
        </button>
      )}
      {showCount > pageSize && (
        <button
          className={styles.loadMore}
          onClick={() => setShowCount(pageSize)}
        >
          Show Less ↑
        </button>
      )}
    </>
  );
}
