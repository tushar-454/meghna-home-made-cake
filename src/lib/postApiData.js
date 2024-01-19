export default async function postApiData(apiendpoint, method, payload) {
  const result = await fetch(`http://localhost:5000/api/v1/${apiendpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return result.json();
}
