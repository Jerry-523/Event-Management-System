# Sistema Corporativo de Gestão de Eventos e Insights

## Descrição
Este projeto é um sistema de gestão de eventos desenvolvido para otimizar a organização de eventos corporativos, com funcionalidades de análise de dados e geração de insights. O sistema foi construído como um **Web Service (WS)**, utilizando **GraphQL** para consulta e manipulação de dados, e **SQLite3** como banco de dados relacional.

### Principais Conceitos
#### Web Service (WS)
Um Web Service é um sistema projetado para permitir a comunicação entre diferentes aplicações via internet, usando protocolos padronizados. No contexto deste projeto:
- **Protocolo HTTP/HTTPS**: Toda a comunicação é feita por meio de requisições HTTP.
- **GraphQL**: Substitui o tradicional REST, oferecendo flexibilidade para os clientes obterem apenas os dados necessários em uma única requisição.

#### GraphQL
GraphQL é uma linguagem de consulta para APIs, que permite:
- **Consultas específicas**: O cliente pode solicitar apenas os dados que deseja, reduzindo o tráfego desnecessário.
- **Eficiência**: Combinação de múltiplas chamadas em uma única requisição.
- **Schema tipado**: Define a estrutura e os tipos de dados disponíveis na API, ajudando na validação e documentação automática.
- **Mutations**: Permite criar, atualizar ou deletar dados no sistema.

Exemplo de consulta no sistema:
```graphql
query {
  events {
    title
    category
    date
  }
}
```

Exemplo de mutation para criar um evento:
```graphql
mutation {
  createEvent(input: {
    title: "Workshop de Inovação",
    category: "Inovação",
    date: "2025-02-20",
    location: "São Paulo",
    description: "Um evento para explorar ideias inovadoras.",
    capacity: 100,
    status: "ativo"
  }) {
    id
    title
  }
}
```

---

## Funcionalidades
1. **Gerenciamento de Eventos**
   - Criar, atualizar e excluir eventos.
   - Gerenciar sessões associadas aos eventos.
   - Relacionar eventos a categorias específicas.

2. **Gestão de Participantes**
   - Inscrição em eventos e sessões.
   - Registro de interesses para recomendações personalizadas.

3. **Interatividade e Feedback**
   - Envio de perguntas durante sessões de eventos.
   - Coleta de feedback com pontuações e comentários.

4. **Análise e Relatórios**
   - Geração de relatórios dinâmicos sobre:
     - Distribuição geográfica dos participantes.
     - Taxa de ocupação de eventos/sessões.
     - Popularidade de categorias.
   - Exportação dos relatórios em formatos **JSON** e **CSV**.

---

## Tecnologias Utilizadas
- **Node.js**: Plataforma para execução do servidor.
- **GraphQL**: Linguagem de consulta e manipulação de dados.
- **SQLite3**: Banco de dados leve e fácil de usar.
- **Sequelize**: ORM para interagir com o banco de dados.

---

## Configuração e Execução

### Pré-requisitos
- Node.js (v14 ou superior)

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seuprojeto/event-management.git
   cd event-management
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   npm install apollo-server graphql sequelize sqlite3
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse o playground GraphQL em: `http://localhost:4000/graphql`.

---

## Estrutura do Banco de Dados
### Tabelas Principais
- **Events**: Armazena detalhes dos eventos.
- **Sessions**: Gerencia as sessões de eventos.
- **Participants**: Registra informações dos participantes.
- **Feedbacks**: Coleta feedbacks dos eventos.

---


