/**
 * Represents a GitHub repository.
 */
export interface GitHubRepository {
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string;
  /**
   * The URL of the repository.
   */
  url: string;
  /**
   * The programming language used in the repository.
   */
  language: string;
}

/**
 * Asynchronously retrieves a list of GitHub repositories for a given user.
 *
 * @param username The GitHub username.
 * @returns A promise that resolves to an array of GitHubRepository objects.
 */
export async function getGithubRepositories(username: string): Promise<GitHubRepository[]> {
  // TODO: Implement this by calling the GitHub API.

  return [
    {
      name: 'StayHub',
      description: 'A full-stack responsive web app featuring property listings, user auth, and reviews.',
      url: 'https://github.com/Satishgouda-patil/AirBnb-clone',
      language: 'JavaScript',
    },
    {
      name: 'food-ordering-bot',
      description: 'Built using Node.js, Express, MongoDB, and Dialogflow to simulate conversational food ordering.',
      url: 'https://github.com/Satishgouda-patil/food-ordering-bot',
      language: 'JavaScript',
    },
    {
      name: 'AgriTech',
      description: 'Designed a platform connecting buyers and sellers in the agriculture sector.',
      url: 'https://github.com/Satishgouda-Patil/AgriTech',
      language: 'JavaScript',
    },
  ];
}
