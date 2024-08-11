import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ledoctah.png"
          />

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
    </article>
  );
}
