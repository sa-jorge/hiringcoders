import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario] = useState('');
  const [ erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => (repositoriesName.push(repository.name)));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      navigate('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <>
      <input className="inputusuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}> Pesquisar </button>
      {erro ? <span>Ocorreu um erro, tente novamente.</span> : ''}
    </>
  );
}

export default Home;