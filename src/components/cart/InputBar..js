import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyCartItemCount } from '../../features/cartSlice';
import { ButtonInput } from './ButtonInput';
import styles from './InputBar.module.css';

export const InputBar = ({ data }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      modifyCartItemCount({ ...data, itemQuantity: e.target.value })
    );
  };

  return (
    <div className={styles.inputContainer}>
      <ButtonInput data={data} action="less" icon="less" />
      <div className={styles.txtField}>
        <input
          className={styles.inpt}
          type="number"
          value={data.itemQuantity}
          onChange={handleChange}
        />
      </div>
      <ButtonInput data={data} action="pluss" icon="pluss" />
    </div>
  );
};
