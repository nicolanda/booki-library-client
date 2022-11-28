import { CircularProgress } from '@mui/material';
import React from 'react';
import { useGetAllCategoriesQuery } from '../../../../services/api/books/BookiApi';
import { TableHead } from '../../tables/TableHead';
import { CategoryItem } from './CategoryItem';

export const CategoriesList = () => {
  const { data: allCategories, isLoading } =
    useGetAllCategoriesQuery();
  const columns = [
    { label: 'id', field: 'id' },
    { label: 'Nombre', field: 'name' },
    { label: 'Acciones', field: 'actions' }
  ];
  console.log(allCategories);
  if (isLoading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <div>
      <table>
        <TableHead columns={columns} />
        {allCategories.map((category) => {
          return <CategoryItem key={category.id} {...category} />;
        })}
      </table>
    </div>
  );
};
