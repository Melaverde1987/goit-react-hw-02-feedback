import React from 'react';
import styles from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label} </span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
