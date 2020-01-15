import React,{useState} from 'react';
import './Seach.css';

export default function Seach() {
    const [email,setEmail] = useState('');

    function handleSubmit(event){
        var newEmail = (email);
        localStorage.setItem('email',newEmail);
        alert("Email "+ newEmail + " inseirido com sucesso");
    } 
    return (
        <div>
            <form method="#" action="#" onSubmit={handleSubmit} >
                <input
                    type="Email"
                    required
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Cadastrar Email" />
                <input
                    type="submit"
                    value="Cadastrar" />
            </form>
        </div>
    )
}