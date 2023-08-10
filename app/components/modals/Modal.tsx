'use client';

import styles from '../../../styles/components/Modal.module.scss'
import { useCallback, useEffect, useState } from "react";
import {IoMdClose} from 'react-icons/io'
import Button from '../Button';


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModal,setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);

    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        },300);
    }, [disabled,onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled,onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [disabled,secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.relative}>
                {/* Content */}
                    <div
                        style={{
                        transform: `translateY(${showModal ? '0' : '100%'})`,
                        opacity: showModal ? '1' : '0',
                        transition: 'transform 300ms, opacity 300ms',
                        height: '100%',
                    }}
                    >
                    <div className={styles.content}>
                    {/* Header */}
                    <div className={styles.header}>
                        <button onClick={handleClose}className={styles.closeButton}>
                            <IoMdClose size = {18}/>
                        </button>
                        <div className={styles.modalTitle}>
                            {title}
                        </div>
                            </div>
                            {/* Body*/}
                            <div className={styles.modalBody}>
                                {body}
                            </div>
                            {/* Footer */}
                            <div className={styles.modalFooter}>
                                <div className={styles.modalFooterButtons}>
                                {secondaryAction && secondaryActionLabel &&(
                                <Button disabled={disabled}
                                        label={secondaryActionLabel}
                                        onClick={handleSecondaryAction}
                                        outline
                                        
                                />
                                )}
                                <Button disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                        
                                />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;