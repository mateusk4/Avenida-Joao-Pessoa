
import React from "react";

function Table_cargos() {
  const funcionarios = [
    { id: 1, nome: "João Silva", cargo: "Desenvolvedor" },
    { id: 2, nome: "Pedro Oliveira", cargo: "Gerente" },
  ];

  return (
    <div>
      <h1>Cargos dos Funcionários</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
          </tr>
        </thead>

        <tbody>
          {funcionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td>{funcionario.id}</td>
              <td>{funcionario.nome}</td>
              <td>{funcionario.cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table_cargos;
