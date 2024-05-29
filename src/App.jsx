import styles from './App.module.css';
import ListRepos from "./components/ListRepos"


function App() {
  
  return (
    <>
    <div className={styles.main_container}>
      <ListRepos />
      <div className={styles.container_right}>
            <h1>Teste</h1>
        </div>
    </div>
      
    </>
  )
}

export default App
