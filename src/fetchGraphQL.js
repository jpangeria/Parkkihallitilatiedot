// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.oulunliikenne.fi/proxy/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;