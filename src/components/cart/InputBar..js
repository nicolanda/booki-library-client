import { ButtonInput } from './ButtonInput';
import styles from './InputBar.module.css';

export const InputBar = () => {
  return (
    <div className={styles.inputContainer}>
      <ButtonInput icon="less" />
      <div className={styles.txtField}>
        <input className={styles.inpt} type="number" />
      </div>
      <ButtonInput icon="pluss" />
    </div>
  );
};
