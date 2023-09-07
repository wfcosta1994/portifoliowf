import ButtonB from '../../elements/ButtonB'
import styles from '../../elements/Project.module.css'
import Card from '../../elements/Card'
import lpdnc from '../../image/project/lpdnc.svg'
function Projects (){
    return(
        <div className={styles.projects} id='project'>
            <h1>Projetos</h1>
            <Card
            img={lpdnc} cd 
            title='LP - DNC' 
            tech=' HTML, CSS e JS'
            description='Desccisoopopoiaspjlsajdl'
            repo='https://globoplay.globo.com/'
            site='https://central.vipleiloes.com.br/Login.aspx'
            />
            <Card
            img={lpdnc} 
            title='LP - DNC' 
            tech=' HTML, CSS e JS'
            description='Desccisoopopoiaspjlsajdl'
            repo='https://github.com/wfcosta1994/portifolio'
            site='https://central.vipleiloes.com.br/Login.aspx'
                />
            <Card
            img={lpdnc} 
            title='LP - DNC' 
            tech=' HTML, CSS e JS'
            description='Desccisoopopoiaspjlsajdl'
            repo='https://github.com/wfcosta1994/portifolio'
            site='https://central.vipleiloes.com.br/Login.aspx'
                />
            
            <ButtonB text='Acesse meu repositório' link='https://github.com/wfcosta1994'/>
        </div>
    )
}
export default Projects