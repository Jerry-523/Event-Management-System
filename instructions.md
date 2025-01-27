### 1. **Criar um Evento (Create Event)**

Esta query cria um novo evento com todos os dados necessários.

```graphql
mutation {
  createEvent(input: {
    title: "Tech Conference 2025"
    category: "Technology"
    date: "2025-06-15T09:00:00Z"
    location: "São Vicente, Cabo Verde"
    description: "A conference about the future of technology."
    capacity: 500
    status: "ativo"
  }) {
    id
    title
    category
    date
    location
    description
    capacity
    status
  }
}
```

### 2. **Obter todos os Eventos (Get All Events)**

Esta query busca todos os eventos cadastrados no sistema.

```graphql
query {
  events {
    id
    title
    category
    date
    location
    description
    capacity
    status
  }
}
```

### 3. **Criar um Participante (Create Participant)**

Esta mutação cria um novo participante, incluindo seus interesses.

```graphql
mutation {
  createParticipant(input: {
    name: "Jerry Borges"
    email: "jerry.borges@gmail.com"
    interests: ["Tech", "Programming"]
  }) {
    id
    name
    email
    interests
  }
}
```

### 4. **Obter todos os Participantes (Get All Participants)**

Esta query busca todos os participantes cadastrados.

```graphql
query {
  participants {
    id
    name
    email
    interests
  }
}
```

### 5. **Criar uma Sessão para um Evento (Create Session)**

Esta mutação cria uma sessão para um evento específico, associando o `eventId`.

```graphql
mutation {
  createSession(input: {
    eventId: 1
    title: "AI and the Future"
    date: "2025-06-15T14:00:00Z"
  }) {
    id
    eventId
    title
    date
  }
}
```

### 6. **Obter todas as Sessões de um Evento (Get Sessions by Event)**

Esta query retorna todas as sessões associadas a um evento específico.

```graphql
query {
  event(id: 1) {
    id
    title
    sessions {
      id
      title
      date
    }
  }
}
```

### 7. **Criar um Feedback para um Evento (Create Feedback)**

Esta mutação permite enviar um feedback para um evento específico, incluindo um comentário e uma pontuação.

```graphql
mutation {
  createFeedback(input: {
    eventId: 1
    score: 4
    comment: "Great event, very informative!"
  }) {
    id
    eventId
    score
    comment
  }
}
```

### 8. **Obter Feedbacks de um Evento (Get Feedbacks by Event)**

Esta query retorna todos os feedbacks associados a um evento específico.

```graphql
query {
  event(id: 1) {
    id
    title
    feedbacks {
      id
      score
      comment
    }
  }
}
```

### 9. **Atualizar os Dados de um Evento (Update Event)**

Esta mutação permite atualizar um evento existente, modificando seus detalhes.

```graphql
mutation {
  updateEvent(id: 1, input: {
    title: "Updated Tech Conference 2025"
    category: "Technology"
    date: "2025-06-20T09:00:00Z"
    location: "Praia, Cabo Verde"
    description: "An updated conference about technology."
    capacity: 600
    status: "ativo"
  }) {
    id
    title
    category
    date
    location
    description
    capacity
    status
  }
}
```

### 10. **Excluir um Participante (Delete Participant)**

Esta mutação remove um participante do sistema.

```graphql
mutation {
  deleteParticipant(id: 1) {
    id
    name
    email
  }
}
```

### 11. **Excluir um Evento (Delete Event)**

Esta mutação exclui um evento do sistema.

```graphql
mutation {
  deleteEvent(id: 1) {
    id
    title
  }
}
```

### 12. **Testar Relacionamento entre Evento e Participantes**

Você pode testar a relação entre eventos e participantes, verificando os participantes de um evento específico:

```graphql
query {
  event(id: 1) {
    id
    title
    participants {
      id
      name
      email
    }
  }
}
```

### 13. **Criar uma Pergunta**
```graphql
mutation {
  createQuestion(input: {
    content

: "What are the keynote speakers?"
    participantId: 1
    eventId: 1
  }) {
    id
    content
    participantId
    eventId
    status
  }
}
```

---
