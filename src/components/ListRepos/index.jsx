import styles from './ListRepos.module.css';
import code from './assets/code.svg';
import chat from './assets/chat.svg';
import share from './assets/share.svg'

export default function ListRepos(){
    return (
        <>
            <div className={styles.container_left}>
                <div className={styles.header}>
                    <div className={styles.input_search}>
                        <input type="text" value="" placeholder="Pesquisar"/>
                    </div>
                </div>
        
                <aside className={styles.container_list}>
                    <div className={styles.container_repo_box}>
                        <h2 className={styles.container_repo_box_title}>Repository title</h2>
                        <div className={styles.container_repo_box_content}>
                            <div className={styles.container_repo_box_content_info}>
                                <label className={styles.label_title}>Private:</label>
                                <label>Sim</label>
                            </div>
                            <div className={styles.container_repo_box_content_info}>
                                <label className={styles.label_title}>Last build:</label>
                                <label>01/01/2024</label>
                            </div>
                            
                        </div>
                        <div className={styles.container_repo_box_content_footer}>
                            <div className={styles.conteudo_rodape}>
                                <ul>
                                    <li>
                                        <img src={code} />
                                    </li>
                                    <li>
                                        <img src={share} />
                                    </li>
                                    <li>
                                        <img src={chat} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </aside>
            </div>
        </>
    )
}