'use client'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Key, Mail, User, User2 } from 'lucide-react';
import Link from 'next/link';
import { useRegister } from './useSignupAction';
import InputField from '@/components/forms/InputField';
import EmailField from '@/components/forms/EmailField';
import PasswordField from '@/components/forms/PasswordField';
import SubmitButton from '@/components/forms/SubmitButton'

type RegisterFormProps = {
    onSwitch: () => void
}

const Register = ({onSwitch}: RegisterFormProps) => {
    const { form, loading, showPassword, register, handleShowPassword } = useRegister()
    return (
        <div className='relative'>
            <div className="p-4">
                <h2 className='text-3xl font-extrabold text-center mb-2 tracking-tight'>S'inscrire</h2>
                <p className='text-center'>Rejoignez-nous et commandez sans attendre.</p>

                <Form {...form}>
                    <div className="mt-4 space-y-4">
                        <InputField control={form.control} />
                        <EmailField control={form.control} />
                        <PasswordField control={form.control} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                        {/* ... bouton de connexion */}
                        <SubmitButton
                            loading={loading}
                            text="S'inscrire"
                            onClick={form.handleSubmit(register)}
                        />

                    </div>
                </Form>
                <p className="mt-2 text-black-200 text-center">
                    Déjà avoir une compte?
                    <span onClick={onSwitch} className="text-red-300 font-bold cursor-pointer hover:text-red-400 transition-colors">
                        Se connecter
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register