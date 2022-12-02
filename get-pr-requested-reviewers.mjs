import { client } from './http.mjs';

export const getPullRequestComments = async (repo, id) => {
  const pathname = `repos/${repo}/pulls/${id}/comments`;
  const options = {
    pagination: {
      countLimit: 100
    },
  }
  try {
    return await client.paginate.all(pathname, options);
  } catch {
    return [];
  }
};