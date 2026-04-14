# 🌿 Aurora Verde

**Aurora Verde** é uma interface de e-commerce sustentável focada em produtos ecológicos e orgânicos. Desenvolvido com React, o projeto tem como objetivo praticar conceitos de componentização, gerenciamento de estado com Context API e estilização com CSS.

---

## 📸 Preview

![Preview do Projeto](./src/assets/imagemAurora.jpeg)

---

## 🚀 Funcionalidades

- ✅ Busca de produtos
- ✅ Carrinho de compras com contexto global
- ✅ Sistema de favoritos
- ✅ Countdown de promoções
- ✅ Layout totalmente responsivo
- ✅ Acessibilidade com ARIA labels

---

## 🧩 Estrutura de Pastas

```
/aurora-verde
├── public/
├── src/
│   ├── assets/              # Imagens e ícones
│   ├── components/          # Componentes React
│   │   ├── Header.jsx       # Header com busca e carrinho
│   │   ├── Nav.jsx          # Navegação principal
│   │   ├── HeroSection.jsx  # Banner promocional
│   │   ├── BeneSelection.jsx # Benefícios (frete, suporte, etc.)
│   │   ├── Categories.jsx   # Categorias de produtos
│   │   ├── PopularProducts.jsx # Produtos populares
│   │   └── Sale.jsx         # Cards de promoções
│   ├── contexts/            # Contextos React
│   │   ├── CartContext.jsx  # Gerenciamento do carrinho
│   │   └── FavoritesContext.jsx # Gerenciamento de favoritos
│   ├── Hooks/               # Hooks personalizados
│   │   └── useCountdown.jsx # Countdown regressivo
│   ├── App.jsx              # Componente raiz
│   └── main.jsx             # Ponto de entrada
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Build tool
- **Context API** - Gerenciamento de estado global
- **Font Awesome** - Ícones
- **CSS3** - Estilização (sem frameworks)
- **ESLint** - Linter de código

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ThaysPei/aurora-verde.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:** `http://localhost:5173`

---

## 🧪 Comandos úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build para produção |
| `npm run lint` | Executa o linter |
| `npm run preview` | Preview do build local |

---

## 🎯 Próximos Passos

- [ ] Implementar página de detalhes do produto
- [ ] Adicionar integração com API de pagamentos
- [ ] Implementar filtros e ordenação de produtos
- [ ] Adicionar testes unitários
- [ ] Implementar animações de transição
- [ ] Otimizar imagens (WebP, lazy loading)

---

## 📝 Licença

Projeto desenvolvido para fins educacionais.

---

Feito com 💚 por Thays Pei
