'use client';
import axios from 'axios';
import styles from '../../../styles/components/RegisterModal.module.scss'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';
import { useCallback,useState } from 'react';
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import Logo from '../navbar/Logo';




const RegisterModal  = () => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
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

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal,loginModal]);

    const bodyContent = (
        <div className={styles.flexContainer}>
            <Logo/>
            <Heading title="Welcome to Helsinki Restaurant Finder"
            subtitle="Create an account to add favorites"
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
            onClick={()=> signIn('google')}
            />
             <Button
            outline
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={()=> signIn('github')}
            />
            <div className={styles.accountContainer}>
                <div className={styles.accountFlex}>
                    <div>
                    Already have an account?
                    </div>
                    <div className={styles.footerLogin}
                    onClick={toggle}>
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
        actionLabel="Continue with email"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
      );
}
 
export default RegisterModal ;