import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchPost = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError('Failed to fetch post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleFetchPost}>
        Get post
      </button>

      <div className="content">
        {loading && <p>Loading...</p>}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {post && !loading && !error && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}

        {!post && !loading && !error && (
          <p>
            TODO: Replace me with fetched data when the <code>Get post</code>{' '}
            button is clicked
          </p>
        )}
      </div>
    </div>
  );
}
