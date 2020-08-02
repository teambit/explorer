import React from "react";
import styles from "./component-card.module.scss";
import {
  BaseComponentCard,
  BaseComponentCardProps,
} from "@bit/bit.explorer.ui.base-component-card";
import { Icon } from "@teambit/evangelist-temp.elements.icon";
import { Image } from "@teambit/evangelist-temp.elements.image";
import filesize from "filesize";

// TODO - export from bit web and use component here
export function checkIsNaN(number) {
  if (isNaN(+number)) return true;
  return false;
}

export function generateReadableSize(number) {
  if (number < 0) return;
  if (checkIsNaN(number)) return;
  return filesize(number, { round: 0 }).toUpperCase();
}
// -------

export type ComponentCardProps = {
  /**
   * the full name of the component
   */
  id: string;
  /**
   * the version of the component
   */
  version?: string;
  /**
   * the description of the component
   */
  description?: string;
  /**
   * the status of the component
   */
  ciStatus?: string;
  /**
   * the size of the component
   */
  size?: number;
  /**
   * the framework used to build the component
   */
  framework?: string;
  /**
   * override styles
   */
  className?: string;
  /**
   * preview renders the component image
   */
  preview?: any;
  /**
   * true if the component is deprecated
   */
  isDeprecated?: boolean;
  /**
   * true if the component is internal
   */
  isInternal?: boolean;
} & BaseComponentCardProps;

export function ComponentCard({
  id = "",
  className,
  preview,
  version,
  description,
  // ciStatus,
  size,
  // framework,
  isDeprecated,
  // isIntetnal,
}: ComponentCardProps) {
  return (
    <BaseComponentCard
      id={id}
      version={version}
      preview={preview}
      description={description}
      isDeprecated={isDeprecated}
      className={className}
    >
      <div className={styles.bottom}>
        <div className={styles.left}>
          <CiStatus />
          <Icon of="note" className={styles.icon} />
          <Icon of="expand" className={styles.icon} />
          <span className={styles.size}>{generateReadableSize(size)}</span>
        </div>
        <Image
          alt="react env"
          className={styles.img}
          src="tutorial-icons/react.svg"
        />
      </div>
    </BaseComponentCard>
  );
}

ComponentCard.defaultProps = {
  isDeprecated: false
};

function CiStatus() {
  return <span className={styles.dot}></span>;
}
