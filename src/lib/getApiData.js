export default async function getApiData(apiendpoint) {
  const result = await fetch(`${process.env.APIURL}/api/v1/${apiendpoint}`);
  return result.json();
}
