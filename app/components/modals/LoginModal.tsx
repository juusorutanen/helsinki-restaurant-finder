'use client';
import { signIn } from 'next-auth/react';
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
import Logo from '../navbar/Logo';
import { useRouter } from 'next/navigation';


const LoginModal  = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading,setIsLoading] = useState(false);
    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''       
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect:false,
        })
        .then((callback) => {
            setIsLoading(false);

            if (callback?.ok){
                toast.success("Logged in");
                router.refresh();
                loginModal.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        })
    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal,registerModal]);

    const bodyContent = (
        <div className={styles.flexContainer}>
            <Logo/>
            <Heading title="Welcome back!"
            subtitle="Login to your account"
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
            label="Login with Google"
            icon={FcGoogle}
            onClick={()=> signIn('google')}
            />
             <Button
            outline
            label="Login with Github"
            icon={AiFillGithub}
            onClick={()=> signIn('github')}
            />
            <div className={styles.accountContainer}>
                <div className={styles.accountFlex}>
                    <div>
                    Don&apos;t have an account yet?
                    </div>
                    <div className={styles.footerLogin}
                    onClick={toggle}>
                    Register here
                    </div>
                </div>
            </div>

        </div>
    )
    
    
    return (
        <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Login"
        onClose={()=> {loginModal.onClose(); reset();}}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
      );
}
 
export default LoginModal;