import { useEffect, useRef, useState } from "react";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import { Button, Text } from "@chakra-ui/react";
import { json } from "react-router-dom";
import comida from '../../assets/comida.jpg'
import whats from '../../assets/whats.png'
import likerosa from '../../assets/likerosa.png'
import './PrincipalUsuario.css'


function PrincipalUsuario() {

  const [data, setData] = useState([])

  const usuariosAdmin = async () => {
    await axios
      .get("http://localhost:3008/api/users")
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
  }

  useEffect(() => {        
    usuariosAdmin();
  }, [])

  console.log(data)

  const nomempresa = data.map((user) => <Text
  // estilizar o texto;
  
  >{ user.nome_empresa }</Text>)  
                 
  const endereco = data.map((user) => <Text>{ user.endereco }</Text>)                 
  const telefone = data.map((user) => <Text>{ user.telefone }</Text>)                 
  const foto = data.map((user) => <img src={ user.foto }></img>)                 


  return (
    <>
    <Menu/>
      <p>{ nomempresa[13] }</p>
      <p>{ endereco[13] }</p>
      <img src={foto[13]} className="foto-principal"></img>

      <div className="whats">
      <img src={whats} className="foto-whats"></img>
      <Text>{ telefone[13] }</Text>
      </div>

      <Button>
      <div className="whats">
        <img src={likerosa} className="foto-whats"></img>
      </div>
      </Button>

    </>
  );
}

export default PrincipalUsuario;