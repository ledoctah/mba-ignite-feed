import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ledoctah.png',
      name: 'Matheus Ferreira',
      role: 'Tech Lead',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'paragraph',
        content: [{ type: 'link', content: '👉 jane.design/doctorcare' }],
      },
      {
        type: 'paragraph',
        content: [
          { type: 'link', content: '#novoprojeto', href: '#' },
          { type: 'link', content: '#nlw', href: '#' },
          { type: 'link', content: '#rocketseat', href: '#' },
        ],
      },
    ],
    publishedAt: new Date('2024-08-18 13:42'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ledoctah.png',
      name: 'Matheus Ferreira',
      role: 'Tech Lead',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'paragraph',
        content: [{ type: 'link', content: '👉 jane.design/doctorcare' }],
      },
      {
        type: 'paragraph',
        content: [
          { type: 'link', content: '#novoprojeto', href: '#test3' },
          { type: 'link', content: '#nlw', href: '#test2' },
          { type: 'link', content: '#rocketseat', href: '#test' },
        ],
      },
    ],
    publishedAt: new Date('2024-08-15 10:29'),
  },
];

function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
