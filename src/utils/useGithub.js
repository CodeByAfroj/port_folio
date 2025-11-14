import { useEffect, useState } from "react";

export default function useGithubRepoStats(owner, repo) {
  const [stats, setStats] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        const data = await res.json();

        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
        });
      } catch (error) {
        console.error("GitHub API error:", error);
      }
    };

    fetchStats();
  }, [owner, repo]);

  return stats;
}
