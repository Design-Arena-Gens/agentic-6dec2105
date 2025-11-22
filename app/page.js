'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const videos = [
    {
      id: 1,
      title: 'Getting Started with Web Development',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop',
      views: '125K',
      duration: '12:34'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Techniques',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=225&fit=crop',
      views: '89K',
      duration: '18:22'
    },
    {
      id: 3,
      title: 'Building Modern UIs with React',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
      views: '203K',
      duration: '15:47'
    },
    {
      id: 4,
      title: 'CSS Grid & Flexbox Masterclass',
      thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=225&fit=crop',
      views: '156K',
      duration: '21:09'
    },
    {
      id: 5,
      title: 'Node.js Backend Development',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
      views: '97K',
      duration: '25:33'
    },
    {
      id: 6,
      title: 'Deploying Your First App',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop',
      views: '178K',
      duration: '14:56'
    }
  ];

  const playlists = [
    { name: 'Web Development Basics', count: 24 },
    { name: 'JavaScript Deep Dive', count: 18 },
    { name: 'React Tutorials', count: 32 },
    { name: 'Full Stack Projects', count: 12 }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '1.5rem 2rem',
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #FF0000, #CC0000)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(255,0,0,0.3)'
            }}>
              ▶
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1a1a1a' }}>My Channel</h1>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>250K Subscribers</p>
            </div>
          </div>
          <button style={{
            background: '#FF0000',
            color: 'white',
            border: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(255,0,0,0.3)'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            SUBSCRIBE
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: '3rem',
          margin: '0 0 1rem 0',
          textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
        }}>
          Welcome to My Channel! 🎬
        </h2>
        <p style={{
          fontSize: '1.3rem',
          maxWidth: '700px',
          margin: '0 auto 2rem',
          opacity: 0.95
        }}>
          Learn web development, coding tutorials, and tech tips. New videos every week!
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '2rem 0'
        }}>
          {[
            { label: 'Videos', value: '150+' },
            { label: 'Subscribers', value: '250K' },
            { label: 'Total Views', value: '5M+' }
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              padding: '1.5rem 2.5rem',
              borderRadius: '15px',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '3rem 2rem',
        margin: '2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>📚 Popular Playlists</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {playlists.map((playlist, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '2rem',
                borderRadius: '15px',
                color: 'white',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                boxShadow: '0 5px 20px rgba(102,126,234,0.3)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{playlist.name}</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>{playlist.count} videos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '3rem 2rem',
        margin: '2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>🎥 Latest Videos</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {videos.map(video => (
              <div key={video.id} style={{
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  background: '#000',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>
                    {video.duration}
                  </div>
                </div>
                <h4 style={{
                  margin: '1rem 0 0.5rem',
                  fontSize: '1.1rem',
                  color: '#1a1a1a',
                  lineHeight: '1.4'
                }}>
                  {video.title}
                </h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  {video.views} views
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '3rem 2rem',
        margin: '2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>
            ✉️ Stay Updated
          </h3>
          <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Get notified about new videos and exclusive content!
          </p>
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '1rem',
                fontSize: '1rem',
                border: '2px solid #ddd',
                borderRadius: '10px',
                outline: 'none'
              }}
            />
            <button type="submit" style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(102,126,234,0.3)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p style={{
              marginTop: '1rem',
              color: '#4CAF50',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              ✓ Thanks for subscribing!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'white',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: '0 0 1rem 0' }}>
          © 2024 My YouTube Channel. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
