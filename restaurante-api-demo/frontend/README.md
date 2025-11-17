# 🍽️ Front-end - Restaurante API

Interface React que se comunica com a API RESTful do restaurante.

## 🚀 Como Rodar

### Pré-requisitos
- Node.js instalado
- Back-end rodando em `http://localhost:4000`

### Passos

1. **Instalar dependências** (se ainda não fez):
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento**:
```bash
npm run dev
```

3. **Abrir no navegador**:
O Vite mostrará a URL (geralmente `http://localhost:5173`)

## 📁 Estrutura do Projeto

```
/frontend
  /src
    /services
      - api.js          ← Comunicação com o back-end
    - App.jsx           ← Componente principal
    - App.css           ← Estilos
    - main.jsx          ← Ponto de entrada
```

## 🔗 Conexão com o Back-end

O front-end se comunica com o back-end através do arquivo `src/services/api.js`:

- **Base URL**: `http://localhost:4000/api`
- **Endpoints usados**: 
  - `GET /cardapio` - Buscar cardápio
  - `POST /comandas` - Criar novo pedido

## 🎨 Funcionalidades Implementadas

### Passo 2.1 - Leitura
- ✅ Buscar e exibir cardápio completo
- ✅ Loading state (carregando...)
- ✅ Error handling (se o back-end não responder)
- ✅ Design responsivo
- ✅ Efeitos hover nos cards

### Passo 2.2 - Criação de Pedidos (Novo!)
- ✅ Adicionar itens ao carrinho (comanda)
- ✅ Exibir carrinho com itens selecionados
- ✅ Calcular total do pedido automaticamente
- ✅ Enviar pedido para o back-end (POST)
- ✅ Limpar carrinho após pedido bem-sucedido
- ✅ Validação de carrinho vazio
- ✅ Feedback visual com alertas

## 🔧 Tecnologias

- **React** - Biblioteca UI
- **Vite** - Build tool e dev server
- **Axios** - Cliente HTTP
- **CSS3** - Estilização com gradientes e animações

## 🐛 Troubleshooting

### Erro: "A Cozinha (Back-end) não respondeu"

**Solução:**
1. Verifique se o back-end está rodando:
   ```bash
   cd ../backend
   npm run dev
   ```
2. Confirme que o servidor está em `http://localhost:4000`
3. Verifique o console do navegador (F12) para mais detalhes

### CORS Error

Se você ver erro de CORS no console, verifique se o back-end tem o middleware `cors()` configurado em `app.js`.

## 📝 Próximos Passos (Passo 2.3)

- [ ] Adicionar campo para escolher número da mesa
- [ ] Implementar botão para remover itens do carrinho
- [ ] Criar página para visualizar histórico de pedidos
- [ ] Adicionar filtros no cardápio (por preço, tipo)
- [ ] Implementar busca de itens do cardápio

## 👨‍💻 Desenvolvimento

Para adicionar novas funcionalidades:

1. **Adicione a função no serviço** (`src/services/api.js`)
2. **Use a função no componente** (com `useState` e `useEffect`)
3. **Estilize no CSS** (`src/App.css`)
