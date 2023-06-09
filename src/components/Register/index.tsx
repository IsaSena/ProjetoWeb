import { useState } from 'react';
import { api } from '../../services/api';
import { EventDTO } from '../../dtos/EventDTO';

import {
     Container 
} from './styles';

interface Params{
    evento: EventDTO;
}

export function Register(){
    const [ e, setEvento ] = useState('');
    const [ data, setData ] = useState('');
    const [ hora_inicio, setHora_Inicio ] = useState('');
    const [ hora_fim, setHora_Fim ] = useState('');
    const [ detalhe, setDetalhe ] = useState('');
    const [ imagem, setImagem ] = useState('');

    async function attDados()
    {   if (e === "" 
        ||data === "" 
        ||hora_inicio === ""
        ||hora_fim === ""
        ||detalhe === "") {
            alert("Campo vazio ou campo inválido!")
        }
        try {
            await api.post('/eventos', {evento : e, data, hora_inicio, hora_fim, detalhe});
        }catch(e){
            console.log(e);
        }finally{

        }
    }

    return(
        <Container>
            <h1>Cadastrar / Alterar evento</h1>
            <text>Nome do evento:</text>
            <input 
            onChange={(event) => setEvento(event.target.value)}
            type='text'/>

            <text>Data:</text>
            <input 
            onChange={(event) => setData(event.target.value)}
            type='text'/>

            <text>Hora de início:</text>
            <input 
            onChange={(event) => setHora_Inicio(event.target.value)}
            type='text'/>

            <text>Nome de finalização:</text>
            <input 
            onChange={(event) => setHora_Fim(event.target.value)}
            type='text'/>

            <text>Detalhes:</text>
            <input 
            onChange={(event) => setDetalhe(event.target.value)}
            type='text'/>

            <text>Imagem</text>
            <input type='file'/>

            <button type='submit' onClick={() => attDados()}></button>
        </Container>
    )
}