# 🦖 Mesozoic Front - Enciclopédia Pré-Histórica

> Aplicação web interativa para catalogação, busca e visualização detalhada de criaturas do Período Mesozoico. Desenvolvida em **Angular** e consumindo uma API RESTful em **Spring Boot**.

---

## 🚀 Sobre o Projeto

O **Mesozoic Front** é a interface do sistema de gerenciamento e exploração de criaturas pré-históricas. A aplicação oferece uma experiência fluida, moderna e responsiva, permitindo filtrar espécimes em tempo real por dieta (Carnívoros, Herbívoros, Onívoros), pesquisar por nomes científicos ou populares e visualizar dados detalhados de cada criatura.

---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
* **Angular** (Componentes, Roteamento, Services, Reactive Data flow)
* **TypeScript**
* **HTML5 & CSS3** (Custom Properties / Variáveis CSS, Flexbox, Grid)
* **RxJS** (Consumo assíncrono de APIs)

### **Back-end (Integrado)**
* **Java / Spring Boot** (API REST, Spring Data JPA)
* **PostgreSQL / H2 Database**

---

## ✨ Funcionalidades

- [x] **📊 Dashboard Interativo:** Exibição das últimas criaturas registradas, resumo de dados e navegação rápida.
- [x] **🔍 Busca e Filtros em Tempo Real:** Pesquisa reativa por nome popular, nome científico e filtro dinâmico por tipo de dieta.
- [x] **🏷️ Badges Visuais Dinâmicos:** Classificação visual instantânea baseada na alimentação do dinossauro.
- [x] **📄 Página de Detalhes:** Visualização completa das especificações de cada criatura selecionada.
- [x] **🎨 Dark Theme UI:** Interface moderna com paleta de cores escura inspirada no universo paleontológico.
- [x] **📌 Layout Responsivo:** Sidebar fixa com navegação inteligente e estados ativos de rota.

---

## 📁 Estrutura do Projeto (Front-end)

```text
src/app/
├── components/
│   └── sidebar/                # Componente de navegação lateral fixa
├── pages/
│   ├── dashboard/              # Painel inicial e métricas rápidas
│   ├── criaturas/              # Catálogo completo, busca e filtros
│   └── criatura-detalhe/       # Visualização aprofundada por ID
├── services/
│   └── criatura.service.ts     # Comunicação HTTP com a API Spring Boot
├── app-routing.module.ts       # Gerenciamento de rotas e navegação
└── app.module.ts               # Módulo principal da aplicação
