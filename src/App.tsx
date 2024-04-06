import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://th.bing.com/th/id/R.84f43ef1acb7427b87f1c819f62ad75e?rik=9jfaJLkU8NQRdw&pid=ImgRaw&r=0">
        Olha só que legal minha miniatura do carro do Leclerc.
      </Post>
    </div>
  );
}

export default App;
