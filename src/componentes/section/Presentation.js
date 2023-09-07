import styles from './Presentation.module.css'
import ButtonA from '../../elements/ButtonA';
import {useEffect, useState} from 'react'

function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Waldeir Fernandes!', 'Desenvoldedor Front End', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsdeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
    }, delta) 
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length; // o % pega o resto da divisão
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);
        
        if(!isDeleting && updatedText === fullText){
            setIsdeleting(true);
            setDelta(period);
            } else if (isDeleting && updatedText === ''){
                setIsdeleting(false);
                setDelta(period);
                setLoop(loop+1);
            }
    }

    return(
        <div className={styles.presentation} id='presentation'>
           <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
           <h1>Olá, eu sou {text} </h1>
           <p>
                Texo texto texto <br/>
                Texo texto texto <br/>
                Texo texto texto <br/>
                Texo texto texto <br/>
                Texo texto texto <br/>
           </p>
           <ButtonA link='https://github.com/wfcosta1994' text='Conecte-se comigo'/>
        </div>
    )
}
export default Presentation