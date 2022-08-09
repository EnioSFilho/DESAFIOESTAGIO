import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Logo from "../../assets/images/logo.webp"
import { BsCart3 } from "react-icons/bs";



export default function Table() {

  const [ carrinho, setCarrinho] = useState([]);
  const [listaProdutos, setListaProdutos] = useState([]);
  const [page, setPage] = useState('itens');

  useEffect(() => {
    axios.get("/api/fruit/all").then(response => {
      const produtos = response.data
      setListaProdutos(produtos)

    })

  }, []);

  

  // const [listaNutricao, setListaNutrição] = useState([])
  
  //   useEffect(() => {
  //     axios.get("/api/fruit/:nutrition").then(response =>{
  //       const nutricao = response.data
  //       setListaNutrição(nutricao)
  //     })

  //   },[])
  const addProduto = (item) => {
  
    setCarrinho ([...carrinho, item])

  }

  


  return (
    <Fragment>
       <nav className="navbar bg-light  ">
                <div className="container">
                    <a className="navbar-brand" href={"/"}>
                        <img src={Logo} alt="" width="80" height="80" className="d-inline-block align-text-top" />
                    </a>
                    <a href="/" style={{color: "green", textDecoration: "none"}}><span  style={{fontSize: 30}}>{carrinho.length}<BsCart3 /></span> </a>
                </div>
                 </nav>
                
      <h1>Lista de Produtos</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Gênero</th>
            <th scope="col">Família</th>
            <th scope="col">ordem</th>
            <th scope="col">Info. Nutricionais</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map(produto => (
            <tr key={produto.id}>
              <th scope="row">{produto.id}</th>
              <td>{produto.name}</td>
              <td>{produto.genus}</td>
              <td>{produto.family}</td>
              <td>{produto.order}</td>
                              <td></td>
              
              <td>
                <button type="button" className="btn btn-warning" onClick={() => addProduto()}>Comprar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

