export default async function postApiData(apiendpoint, method, payload) {
  const result = await fetch(`http://localhost:5000/api/v1/${apiendpoint}`, {
    next: {
      revalidate: 1,
    },
    cache: 'no-store',
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return result.json();
}
