export default async function getApiData(apiendpoint) {
  const result = await fetch(`${process.env.APIURL}/api/v1/${apiendpoint}`, {
    next: {
      revalidate: 60,
    },
  });
  return result.json();
}
