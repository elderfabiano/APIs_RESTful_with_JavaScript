import { useEffect, useState } from "react";
import axios from "axios";
import { getUsuarios } from "../services/api";

export function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await getUsuarios()

        console.log("responseeeeeeee", response)

        setUsuarios(response.data.dados || response.data);
      } catch (err) {
        console.error("Erro ao buscar usuários:", err);
        setError("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    }

    fetchUsuarios();
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>👥 Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <strong>{usuario.nome}</strong> — {usuario.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}