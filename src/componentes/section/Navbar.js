import style from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
function Navbar(){
    return(
        <div className={style.navbar}> 
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#project'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/waldeirfernandes/' target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/wfcosta1994' target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a></li>
                <li><a href='https://github.com/wfcosta1994' target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar