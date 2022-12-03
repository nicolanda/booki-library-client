import React from 'react';
import styles from './BooksItems.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDeleteBookMutation } from '../../../../services/api/books/BookiApi';
import { BookEditForm } from './BookEditForm';

export const BooksItems = ({ data }) => {
  const [deleteBook] = useDeleteBookMutation();
  const [edit, setEdit] = React.useState(false);
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.frame}>
            <img
              className={styles.imgItem}
              src={data.imgUrl}
              alt={data.title}
            />
          </div>
        </div>
        <div>
          <p>{data.title}</p>
          {data.authors.map((author) => {
            return <p key={author.id}>{author.name}</p>;
          })}
        </div>
        <div>
          <IconButton
            className={styles.editBtn}
            size="small"
            onClick={() => {
              setEdit(!edit);
            }}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            className={styles.deleteBtn}
            size="small"
            onClick={() => deleteBook(data.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
      {edit && (
        <div>
          <BookEditForm data={data} />
        </div>
      )}
    </div>
  );
};
