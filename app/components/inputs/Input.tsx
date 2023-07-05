'use client'
import styles from '../../../styles/components/Input.module.scss'
import { FieldValues,FieldErrors,UseFormRegister } from "react-hook-form";
import classNames from 'classnames';
import { BiDollar } from 'react-icons/bi';



interface InputProps {
    id:string;
    label:string;
    type?:string;
    disabled?:boolean;
    formatPrice?:boolean;
    required?:boolean;
    register: UseFormRegister<FieldValues>,
    errors:FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors

}) => {

    const inputClasses = classNames(styles.inputClass, {
        [styles.formatPrice]: formatPrice,
        [styles.errors]: errors,
        [formatPrice ? styles.formatPriceLarge : styles.formatPriceSmall]: true,
        [errors[id] ? styles.errorBorderRose : styles.errorBorderNeutral]: true,
        [errors[id] ? styles.errorFocusRose : styles.errorFocusBlack]: true,
      });

      const labelClasses = classNames(styles.label, {
        [styles.formatPrice]: formatPrice,
        [styles.errors]: errors,
        [formatPrice ? styles.formatPriceLarge : styles.formatPriceSmall]: true,
        [errors[id] ? styles.labelErrorTextColor : styles.labelTextColor]: true,
      });

    return ( 
        <div className={styles.relativeContainer}>
            {formatPrice && (<BiDollar
            size={24}  
            className={styles.icon}
            />)}
           <input
           id={id}
           disabled={disabled}
           {...register(id,{ required })}
           placeholder=" "
           type={type}
           className={inputClasses}
           />
           <label 
            className={labelClasses}>
            {label}
         </label>
        </div>
     );
}
 
export default Input;