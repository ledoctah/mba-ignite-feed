import styles from './Post.module.css';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ledoctah.png" />

          <div className={styles.authorInfo}>
            <strong>Matheus Ferreira</strong>
            <span>Tech Lead</span>
          </div>
        </div>

        <time title="11 de agosto às 18:36" datetime="2024-08-11 18:36:21">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉&nbsp;<a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>&nbsp;
          <a href="#">#nlw</a>&nbsp;
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
