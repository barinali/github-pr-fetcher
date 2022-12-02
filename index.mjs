import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';
import { getPullRequests } from './get-pull-requests.mjs';
import { getPullRequestReviews } from './get-pr-review.mjs';
import { getPullRequestComments } from './get-pr-comments.mjs'

const REPO = process.env.REPO || 'facebook/react';

const prs = await getPullRequests(REPO);

for (const pullRequest of prs) {
  pullRequest._reviews = await getPullRequestReviews(REPO, pullRequest.number);
  pullRequest._comments = await getPullRequestComments(REPO, pullRequest.number);
}

writeFileSync(
  resolve('./result.json'),
  JSON.stringify(prs, null, 2),
  {
    flag: 'w'
  }
);

console.log('Completed! Please, check the output in result.json.');
