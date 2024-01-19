export default async function getApiData(apiendpoint) {
  const result = await fetch(`${process.env.APIURL}/api/v1/${apiendpoint}`, {
    cache: 'no-store',
    next: {
      revalidate: 1,
    },
  });
  return result.json();
}
