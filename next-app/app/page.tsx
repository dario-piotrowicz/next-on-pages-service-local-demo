export const runtime = 'edge';

export default async function Home() {

  const myService = process.env.MY_SERVICE;

  const resp = await myService.fetch(new Request('http://0.0.0.0'));
  const txt = await resp.text();

  return (
    <main>
      <h1>next-on-pages Service Binding local demo</h1>
      <h2>{txt}</h2>
    </main>
  )
}
