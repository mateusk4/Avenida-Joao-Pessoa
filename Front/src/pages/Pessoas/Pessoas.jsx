
import React from "react";

function Table_pessoas() {
  const pessoas = [
    { id: 1, nome: "João Silva", tipo: "Funcionário", idade: 28 },
    { id: 2, nome: "Maria Santos", tipo: "Cliente", idade: 35 },
    { id: 3, nome: "Pedro Oliveira", tipo: "Funcionário", idade: 42 },
    { id: 4, nome: "Ana Costa", tipo: "Cliente", idade: 24 },
    { id: 5, nome: "Lucas Souza", tipo: "Cliente", idade: 31 },
  ];

  return (
    <div>
      <h1>Cadastro de Pessoas</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Idade</th>
          </tr>
        </thead>

        <tbody>
          {pessoas.map((pessoa) => (
            <tr key={pessoa.id}>
              <td>{pessoa.id}</td>
              <td>{pessoa.nome}</td>
              <td>{pessoa.tipo}</td>
              <td>{pessoa.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table_pessoas;
