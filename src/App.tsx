import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ledoctah.png',
      name: 'Matheus Ferreira',
      role: 'Tech Lead',
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        id: 2,
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        id: 3,
        type: 'paragraph',
        content: [
          { id: 4, type: 'link', content: '👉 jane.design/doctorcare' },
        ],
      },
      {
        id: 5,
        type: 'paragraph',
        content: [
          { id: 6, type: 'link', content: '#novoprojeto', href: '#' },
          { id: 7, type: 'link', content: '#nlw', href: '#' },
          { id: 8, type: 'link', content: '#rocketseat', href: '#' },
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
      { id: 9, type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        id: 10,
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        id: 11,
        type: 'paragraph',
        content: [
          { id: 12, type: 'link', content: '👉 jane.design/doctorcare' },
        ],
      },
      {
        id: 13,
        type: 'paragraph',
        content: [
          { id: 14, type: 'link', content: '#novoprojeto', href: '#test3' },
          { id: 15, type: 'link', content: '#nlw', href: '#test2' },
          { id: 16, type: 'link', content: '#rocketseat', href: '#test' },
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
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
