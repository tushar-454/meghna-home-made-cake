export default async function getApiData() {
  const result = await fetch(
    `${process.env.APIURL}/api/v1/user/getallcakes`
  );
  return result.json();
}
