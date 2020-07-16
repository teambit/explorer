import React from "react";
import classNames from "classnames";
import styles from "./component-card.module.scss";

export type ComponentCardProps = {
  /**
   * the full name of the component
   */
  id: string;
  /**
   * override styles 
   */
  className?: string;
  /**
   * preview renders the component image
   */
  preview?: any;
};
export function ComponentCard({
  id = "",
  className,
  preview,
}: ComponentCardProps) {
  const idArray = id.split("/");
  const nameSpace = idArray.length > 1 && idArray.slice(0, -1).join(" / ");
  const name = idArray.slice(-1);
  return (
    <div className={classNames(styles.componentCard, className)}>
      <div className={styles.preview}>{preview}</div>
      <div className={styles.content}>
        <div className={styles.nameSpace}>{nameSpace}</div>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
}
