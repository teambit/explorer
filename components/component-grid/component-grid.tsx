import React from 'react';
import styles from './component-grid.module.scss';

export type ComponentGridProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentGrid({children}: ComponentGridProps) {
    return (
        <div className={styles.componentGrid}>
            {children}
        </div>
    )
}