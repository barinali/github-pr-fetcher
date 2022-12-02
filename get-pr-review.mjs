import { client } from './http.mjs';

export const getPullRequestReviews = async (repo, id) => {
  const pathname = `repos/${repo}/pulls/${id}/reviews`;
  const options = {
    pagination: {
      countLimit: 10
    },
  }
  try {
    return await client.paginate.all(pathname, options);
  } catch {
    return [];
  }
};