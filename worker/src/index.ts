export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const allHeaders = [...request.headers.entries()];
		return Response.json({
			content: 'hello from a worker!',
			requestUrl: request.url,
			requestHeaders: allHeaders,
		});
	},
};
