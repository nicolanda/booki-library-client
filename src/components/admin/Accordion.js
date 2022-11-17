import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Accordion.module.css';

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className={styles.navContainer}>
      <header onMouseEnter={() => setIsActive(!isActive)}>
        <div>
          <h3>{title}</h3>
        </div>
      </header>
      {isActive && (
        <div className={styles.itemMenu}>
          {content.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? styles.menuActive : styles.menuNorm
              }>
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
