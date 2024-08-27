import React,{Component} from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentario: [
      {
        nome: 'opaajubileu',
        email: 'ismael@gmail.com',
        data: new Date(2024, 8, 15),
        mensagem: 'opa meu suave'
      },
      {
        nome: 'kkkkk',
        email: 'ismael@gmail.com',
        data: new Date(2024, 8, 20),
        mensagem: 'suave sim'
      }
    ],
    novoComentarios: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = (e) => {
    e.preventDefault();
    console.log('adicionar comentario');

    const novoComentario = {
      nome: 'Novo',
      email: 'ismael@gmail.com',
      data: new Date(),
      mensagem: 'suave sim'
    };

    this.setState({comentario: [...this.state.comentario, novoComentario]});
  };

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentario.map((comentario, index) => (
          <Comentario
            key={index}
            nome={comentario.nome} 
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method='post' onSubmit={this.adicionarComentario()}>
          <h2>Adicionar comentarios</h2>
          <div>
              <input type="text" name="nome" placeholder="digite seu Nome" value={this.state.novoComentario.nome}/>
          </div>
          <div>
              <input type="text" name="email" placeholder="digite seu email" value={this.state.novoComentario.email}/>
          </div>
          <div>
              <input type="text" name="mensagem" rows="4" value={this.state.novoComentario.mensagem}/>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }

};

export default App;
