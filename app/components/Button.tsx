'use client'
import { IconType } from "react-icons";
import styles from '../../styles/components/Button.module.scss'
import classNames from 'classnames';

interface ButtonProps {
    label:string;
    onClick:(e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?:boolean;
    outline?:boolean;
    small?:boolean;
    icon?:IconType;
}


const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon:Icon,
}) => {

    const buttonClasses = classNames(styles.button, {
        [styles.disabled]: disabled,
        [styles.outline]: outline,
        [styles.small]: small,
        [outline ? styles.bgWhite : styles.bgRose500]: true,
        [outline ? styles.borderBlack : styles.borderRose500]: true,
        [outline ? styles.textBlack : styles.textWhite]: true,
        [small ? styles.textSm : styles.textMd]: true,
        [small ? styles.py1 : styles.py3]: true,
        [small ? styles.fontLight : styles.fontSemibold]: true,
        [small ? styles.border1px : styles.border2]: true,
      });
    
      
      return (
        <button
          disabled={disabled}
          onClick={onClick}
          className={buttonClasses}
        >
          {Icon && (
            <Icon
              size={24}
              className={
                styles.icon
              }
            />
          )}
          {label}
        </button>
      );
    };
    
    export default Button;
    
    
    
    
    
    
    
    