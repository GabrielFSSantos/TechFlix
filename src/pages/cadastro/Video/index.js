/* eslint-disable import/extensions */

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index.js';
import useForm from '../../../hooks/useForm/index.js';
import FormField from '../../../components/FormField/index.js';
import Button from '../../../components/Button/index.js';
import videosRepository from '../../../repositories/videos.js';
import categoriasRepository from '../../../repositories/categorias.js';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const { handleChange, values } = useForm(valoresIniciais);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        alert('Video Cadastrado com sucesso!!');

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === values.categoria,
        );

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
