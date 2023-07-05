'use client';
import axios from 'axios';
import styles from '../../../styles/components/RegisterModal.module.scss'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';
import { useCallback,useState } from 'react';
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';




const RegisterModal  = () => {

    const registerModal = useRegisterModal();
    const [isLoading,setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''       
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error("Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className={styles.flexContainer}>
            <Heading title="Welcome to Taste Of Helsinki"
            subtitle="Create an account"
            />
            <Input 
                id="email"
                label = "Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
             />
             <Input 
                id="name"
                label = "Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
             />
             <Input 
                id="password"
                type="password"
                label = "Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
             />
        </div>
    );

    const footerContent = (
        <div className={styles.footerContent}>
            <Button
            outline
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>{}}
            />
             <Button
            outline
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={()=>{}}
            />
            <div className={styles.accountContainer}>
                <div className={styles.accountFlex}>
                    <div>
                    Already have an account?
                    </div>
                    <div className={styles.footerLogin}
                    onClick={registerModal.onClose}>
                    Log in
                    </div>
                </div>
            </div>

        </div>
    )
    
    
    return (
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
      );
}
 
export default RegisterModal ;