import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import './Comentarios.css'
import imagemUser from './user.png';

const Comentario = ({nome, email, data, children, onRemove}) => {
    return(
        <div className='Comentario'>
            <img className="avatar" src={imagemUser} alt={nome}/>
            <div className='conteudo'>
                <h2 className='nome'>{nome}</h2>
                <p className='email'>{email}</p>
                <p className='mensagem'>{children}</p>
                <p className='data'>{formatRelative(data, new Date(), {locale: ptBR})}</p>
                <button onClick={onRemove}>&times;</button>
            </div>
        </div>
    )
};

export default Comentario;