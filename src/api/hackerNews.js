const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";

function itemUrl(id) {
  return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
}

async function fetchTopPostsIds() {
  try {
    const response = await fetch(topStoriesUrl);
    return response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

async function fetchItem(id) {
  try {
    const response = await fetch(itemUrl(id));
    return response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

export async function fetchTopPosts() {
  const ids = await fetchTopPostsIds();
  const topPosts = ids.map(id => fetchItem(id));

  return topPosts;
}
