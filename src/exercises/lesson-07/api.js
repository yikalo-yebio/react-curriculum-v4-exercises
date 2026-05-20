const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * Should return an array of posts
 */
export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = `${POSTS_ENDPOINT}?_limit=10`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`[getPosts]: HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('[getPosts]: failed to fetch posts', error);
    throw error;
  }
}

/**
 * Should return a single post object
 */
export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `[getSinglePost]: HTTP error! status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('[getSinglePost]: failed to fetch post', error);
    throw error;
  }
}
