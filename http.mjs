import got from 'got';

const token = process.env.TOKEN;

export const client = got.extend({
	prefixUrl: 'https://api.github.com',
	headers: {
		Authorization: `Bearer ${token}`,
		Accept: 'application/vnd.github+json'
	}
});
