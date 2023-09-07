import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from '../../componentes/section/Footer.module.css'
function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/waldeirfernandes/' target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/wfcosta1994' target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a></li>
                <li><a href='https://github.com/wfcosta1994' target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a></li>
            </ul>
            <p>waldeirfernandes94@gmail.com</p>
            <p>Waldeir Fernandes © 2023</p>
        </div>
    )
}
export default Footer