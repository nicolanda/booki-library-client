import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllAuthors,
  selectAllAuthors
} from '../../../../features/author/authorSlice';
import authorServiceAxios from '../../../../services/api/books/authorServiceAxios';
import { fetcherAuthor } from '../../../../services/api/books/authorsService';
import { getidentificationType } from '../../../../services/api/register/indetificationType';
import { IconButton } from '@mui/material';
import { AuthorItemList } from './AuthorItemList';
import { TableHead } from '../../tables/TableHead';

export const AuthorList = () => {
  const dispatch = useDispatch();
  const allAuthors = useSelector(selectAllAuthors);
  const [showForm, setShowForm] = useState(null);
  const [axauthor, setAxAuthor] = useState([]);

  const columns = [
    { label: 'Nombre', field: 'name', sorteable: true },
    { label: 'Año', field: 'year', sorteable: true },
    { label: 'Pais', field: 'country', sorteable: true },
    { label: 'Acciones', field: 'actions', sorteable: false }
  ];
  // const [identificationType, setIdentificationType] = useState([]);

  // useEffect(() => {
  //   fetcherAuthor({
  //     method: 'GET',
  //     endPoint: 'author'
  //   }).then((data) => {
  //     setInfoCard(data);
  //   });
  // }, []);

  // const { books } = infoCard;
  // console.log(books);

  // useEffect(() => {
  //   getidentificationType().then((data) => {
  //     setIdentificationType(data);
  //   });
  // }, []);

  // const ident = identificationType;
  // console.log(ident);

  useEffect(() => {
    authorServiceAxios.getAll().then((res) => {
      setAxAuthor(res.data);
    });
  }, []);

  // console.log(axauthor);

  useEffect(() => {
    dispatch(getAllAuthors());
  }, [dispatch]);

  console.log(allAuthors);

  return (
    <div>
      <table>
        <TableHead columns={columns} />
        {allAuthors.map((author) => {
          return <AuthorItemList key={author.id} {...author} />;
        })}
      </table>
    </div>
  );
};
