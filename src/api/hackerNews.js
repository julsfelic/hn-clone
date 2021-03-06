const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
const newStoriesUrl = "https://hacker-news.firebaseio.com/v0/newstories.json";

function itemUrl(id) {
  return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
}

function userUrl(id) {
  return `https://hacker-news.firebaseio.com/v0/user/${id}.json`;
}

export async function fetchItem(id) {
  try {
    const response = await fetch(itemUrl(id));
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

export async function fetchItems(ids, limit = 50) {
  const limitIds = ids.slice(0, limit);
  const items = limitIds.map(id => fetchItem(id));

  return Promise.all(items);
}

export async function fetchUser(id) {
  try {
    const response = await fetch(userUrl(id));
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

export async function fetchTopPostsIds() {
  try {
    const response = await fetch(topStoriesUrl);
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}

export async function fetchNewPostsIds() {
  try {
    const response = await fetch(newStoriesUrl);
    return await response.json();
  } catch (e) {
    throw new Error(`Oh no!!!!!. We got the error: ${e}`);
  }
}
