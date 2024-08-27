import React,{useState} from 'react';


import './App.css';
import Comentario from './components/Comentario';

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  const adicionarComentario = (e) => {
    e.preventDefault();

    setComentarios([...comentarios, {nome: nome, email: email, mensagem: mensagem, data: new Date()}]);
  };

  const removerComentario = (comentario) => {
    let list = comentarios
    list = list.filter(c => c !== comentario);
    setComentarios(list);
  };

  return (
    <div className="App">
      <h1>Meu projeto</h1>
      {comentarios.map((comentario, index) => (
        <Comentario
          key={index}
          nome={comentario.nome} 
          email={comentario.email}
          data={comentario.data}
          onRemove={removerComentario.bind(this, comentario)}>
          {comentario.mensagem}
        </Comentario>
      ))}

      <form className="Novo-comentario" method='post' onSubmit={adicionarComentario}>
        <h2>Adicionar comentarios</h2>
        <div>
            <input type="text" placeholder="digite seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        </div>
        <div>
            <input type="email" placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
            <textarea type="text" rows="4" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required/>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );

};

export default App;
