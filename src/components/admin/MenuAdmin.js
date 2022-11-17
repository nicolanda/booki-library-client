import React from 'react';
import { Accordion } from './Accordion';
import styles from './MenuAdmin.module.css';

export const MenuAdmin = () => {
  const menu = [
    {
      title: 'Información Libros',
      content: [
        { name: 'Libros', path: 'books' },
        { name: 'Categorias', path: 'categories' },
        { name: 'Autores', path: 'authors' },
        { name: 'Impuesto', path: 'taxes' },
        { name: 'Descuento', path: 'discount' }
      ]
    },
    {
      title: 'Información Usuarios',
      content: [
        { name: 'Usuarios', path: 'users' },
        { name: 'Dirección', path: 'address' },
        { name: 'Metodos de Pago', path: 'payment' }
      ]
    },
    {
      title: 'Información Admin 3',
      content: [
        { name: '1', path: '1' },
        { name: '2', path: '1' },
        { name: '3', path: '1' }
      ]
    }
  ];

  // console.log(menu);
  return (
    <div className={styles.menuContainer}>
      <h2>Admin</h2>
      {menu.map(({ title, content }) => (
        <Accordion key={title} title={title} content={content} />
      ))}
    </div>
  );
};
