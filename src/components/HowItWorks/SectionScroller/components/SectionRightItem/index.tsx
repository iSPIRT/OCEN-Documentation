import React, { useRef } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import Icons from '../../../../Icons';

export type Props = {
  icon?: any;
  title: string;
  onClick: () => void;
  active: boolean;
};

const SectionRightItem: React.FC<Props> = (props) => {
  const { icon, title, onClick, active } = props;
  return (
    <div
      className={clsx(styles.Container, {
        [styles.Container_Active]: active,
      })}
      onClick={onClick}>
      <h3 className={styles.Header}>
        {icon && <Icons type={icon} className={styles.Icon} />}
        {title}
      </h3>
    </div>
  );
};

export default SectionRightItem;
