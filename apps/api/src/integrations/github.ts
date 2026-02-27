import { env } from '@api/env';

type CreateIssueInput = {
  title: string;
  body: string;
  labels?: string[];
};

type CreatedIssue = {
  number: number;
  url: string;
};

export async function createGitHubIssue(input: CreateIssueInput): Promise<CreatedIssue | null> {
  if (!env.GITHUB_REPO || !env.GITHUB_TOKEN) {
    return null;
  }

  const response = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      title: input.title,
      body: input.body,
      labels: input.labels ?? [],
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub issue creation failed with status ${response.status}`);
  }

  const data = (await response.json()) as { number: number; html_url: string };
  return {
    number: data.number,
    url: data.html_url,
  };
}
