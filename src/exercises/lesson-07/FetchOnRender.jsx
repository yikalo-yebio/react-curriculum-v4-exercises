import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        {loading && <p>Loading...</p>}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && posts.length > 0 && (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr />
              </div>
            ))}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <p>TODO: Replace me with fetched data when the component renders</p>
        )}
      </div>
    </div>
  );
}
