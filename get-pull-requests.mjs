import { client } from './http.mjs';

export const getPullRequests = async (repo) => {
  const pathname = `repos/${repo}/pulls`;
  const params = {
    state: 'closed',
    sort: 'created',
    direction: 'desc',
  };

  const options = {
    pagination: {
      countLimit: 10
    },
    searchParams: params,
  }
  return await client.paginate.all(pathname, options);
};