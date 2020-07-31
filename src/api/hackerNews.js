const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";

function itemUrl(id) {
  return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
}

function userUrl(id) {
  return `https://hacker-news.firebaseio.com/v0/user/${id}.json`;
}

async function fetchTopPostsIds() {
  try {
    const response = await fetch(topStoriesUrl);
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

async function fetchItem(id) {
  try {
    const response = await fetch(itemUrl(id));
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

export async function fetchTopPosts(limit = 50) {
  const ids = await fetchTopPostsIds();
  const limitIds = ids.slice(0, limit);
  const topPosts = limitIds.map(id => fetchItem(id));

  return Promise.all(topPosts);
}

export async function fetchUser(id) {
  try {
    const response = await fetch(userUrl(id));
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}
