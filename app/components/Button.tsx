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
    icon:Icon,
}) => {

    const buttonClasses = classNames(styles.button, {
        [styles.disabled]: disabled,
        [styles.outline]: outline,
        [outline ? styles.bgWhite : styles.bgGreen]: true,
        [outline ? styles.borderBlack : styles.borderNone]: true,
        [outline ? styles.textBlack : styles.textWhite]: true,
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
    
    
    
    
    
    
    
    