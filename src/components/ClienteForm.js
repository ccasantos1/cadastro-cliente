// src/components/ClienteForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ClienteForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/clientes', { nome, email });
      alert('Cliente cadastrado com sucesso!');
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Cadastrar Cliente</button>
    </form>
  );
};

export default ClienteForm;
