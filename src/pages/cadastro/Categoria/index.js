/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index.js';
import FormField from '../../../components/FormField/index.js';
import Button from '../../../components/Button/index.js';
import useForm from '../../../hooks/useForm/index.js';
import repCategorias from '../../../repositories/categorias.js';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
    link_extra: {
      text: '',
      url: '',
    },
  };
  const [categorias, setCategorias] = useState([]);
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    repCategorias.getAll().then((res) => {
      setCategorias([...res]);
    });
  }, []);

  return (
    <PageDefault>
      <h1 style={{ color: values.cor }}>
        {' '}
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textaarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
