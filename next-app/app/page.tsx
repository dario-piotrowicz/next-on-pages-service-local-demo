export const runtime = 'edge';

export default async function Home() {

  const myService = process.env.MY_SERVICE;

  const response = await myService.fetch(new Request('http://0.0.0.0/test/this-is-a-test', {
    headers: {
      'testing-target': 'service-binding',
      'server': 'next dev',
    }
  }));

  return (
    <main>
      <h1>next-on-pages Service Binding local demo</h1>
      <p>A request has been made to <em>MY_SERVICE</em> (path: <em>/test/this-is-a-test</em>), the service replied with the following:</p>
      <ResponseView response={response} />
    </main>
  );
}

async function ResponseView({ response }: { response: Response }) {
  if (response.status === 200) {
    const {
      content,
      requestUrl,
      requestHeaders
    } = await response.json<{
      content: string;
      requestUrl: string;
      requestHeaders: [key: string, value: string][]
    }>();

    return <>
      <ul>
        <li>
          <strong>content:</strong> {content}
        </li>
        <li>
          <strong>request.url: </strong> {requestUrl}
        </li>
        <li>
          <strong>
            request.headers:
          </strong>
          <ul>
            {requestHeaders.map(([key, value]) => <li key={key}>
              {key}: {value}
            </li>)}
          </ul>
        </li>
      </ul>
    </>
  } else {
    const error = await response.text();
    return <p className="error">
      {error}
    </p>;
  }
}