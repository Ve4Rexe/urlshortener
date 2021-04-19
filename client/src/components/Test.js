import axios from 'axios'
import React,{useState, useEffect} from 'react';
import './Styles.css';

const Test = ()=>{
    const [result, setresult] = useState('')
    const [link, setlink] = useState('')
    const submithandler = async(e)=>{
        e.preventDefault()
        const obj = {
            longurl: link
        }
        console.log(link)
        const data = await axios.post('http://localhost:5000/api/url/shorten', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setlink('')

        setresult(data.data.shorturl)
    }

    useEffect(()=>{
        if (!link){
            setresult('')
        }
    },[result])

    return(
        <div className = "background">
            <h1 className = "header">Link Shortener(Rickroll your friends)</h1>
            <div className = "formwrapper">
                <form className = "form" onSubmit = {submithandler}>
                    <input type = 'text' value = {link} onChange = {e=>setlink(e.target.value)}/>
                    <input type = 'submit' value = 'send'/>
                </form>
            </div>    
            {result && <h1 className = "headline">{result}</h1>} 
        </div>
    )
}

export default Test;