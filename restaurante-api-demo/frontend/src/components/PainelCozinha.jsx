import { useState, useEffect } from 'react';
import { getComandas } from '../services/api';

// Componente que exibe todos os pedidos feitos (Painel da Cozinha)
// Recebe a prop 'refreshTrigger' para saber quando atualizar a lista
export function PainelCozinha({ refreshTrigger }) {
  const [comandas, setComandas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect que busca os pedidos toda vez que o componente monta
  // ou quando a prop 'refreshTrigger' muda (novo pedido foi feito)
  useEffect(() => {
    const fetchComandas = async () => {
      setLoading(true); // Ativa o loading a cada atualização
      try {
        const response = await getComandas();
        console.log('✅ Front-end: Pedidos recebidos!', response.data);
        
        // O back-end retorna { sucesso, mensagem, quantidade, dados }
        const listaPedidos = response.data.dados || response.data;
        
        // Inverte a lista para mostrar os pedidos mais novos primeiro
        setComandas([...listaPedidos].reverse()); 
      } catch (err) {
        console.error('❌ Erro ao buscar pedidos:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchComandas();
  }, [refreshTrigger]); // <-- O gatilho de atualização!

  // --- Renderização ---
  
  if (loading && comandas.length === 0) {
    return (
      <div className="cozinha-secao">
        <h2>👨‍🍳 Painel da Cozinha (Pedidos Feitos)</h2>
        <div className="loading-cozinha">Carregando pedidos da cozinha...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cozinha-secao">
        <h2>👨‍🍳 Painel da Cozinha (Pedidos Feitos)</h2>
        <div className="error-cozinha">
          ❌ Erro ao buscar pedidos. Verifique se o back-end está rodando.
        </div>
      </div>
    );
  }

  return (
    <div className="cozinha-secao">
      <h2>👨‍🍳 Painel da Cozinha (Pedidos Feitos)</h2>
      <p className="cozinha-info">
        {comandas.length === 0 
          ? 'Nenhum pedido feito ainda. Faça seu primeiro pedido!' 
          : `Total de pedidos: ${comandas.length}`
        }
      </p>
      
      {comandas.length > 0 && (
        <div className="cozinha-lista">
          {comandas.map((comanda) => (
            <div key={comanda.id} className="cozinha-pedido">
              <h3>Pedido #{comanda.id}</h3>
              <p className="cozinha-mesa">🪑 Mesa: {comanda.mesa}</p>
              <p className="cozinha-status">
                Status: <span className="status-pendente">{comanda.status}</span>
              </p>
              <p className="cozinha-itens">
                📋 Itens: {comanda.itens.length} {comanda.itens.length === 1 ? 'item' : 'itens'}
              </p>
              <p className="cozinha-total">
                <strong>💰 Total: R$ {comanda.total.toFixed(2)}</strong>
              </p>
              <p className="cozinha-data">
                <small>🕐 Recebido: {new Date(comanda.dataPedido).toLocaleString('pt-BR')}</small>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
