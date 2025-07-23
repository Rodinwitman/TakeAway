'use client'
import { useLogin } from './useAction';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import EmailField from '@/components/forms/EmailField';
import PasswordField from '@/components/forms/PasswordField';
import SubmitButton from '@/components/forms/SubmitButton'


type LoginFormProps = {
  onSwitch: () => void
}

const Login = ({ onSwitch }: LoginFormProps) => {
  const { form, loading, showPassword, login, handleShowPassword } = useLogin()
  return (
    <div className='relative'>
      <div className="p-4">
        <h2 className='text-3xl font-extrabold text-center mb-2 tracking-tight'>Se connecter</h2>
        <p className='text-center text-xs'>Connectez-vous pour un festin à portée de main.</p>
        <Form {...form}>
          <div className='mt-4 space-y-4'>
            <EmailField control={form.control} />
            <PasswordField control={form.control} showPassword={showPassword} handleShowPassword={handleShowPassword} />
            {/* ... bouton de connexion */}
            <SubmitButton
              loading={loading}
              text="Se connecter"
              onClick={form.handleSubmit(login)}
            />

          </div>
        </Form>
        <p className='mt-2 text-black-200 text-center'>
          Pas encore de compte?
          <span onClick={onSwitch} className='text-red-300 font-bold cursor-pointer hover:text-red-400 transition-colors'>S'inscrire</span>
        </p>
      </div>
    </div>
  )
}

export default Login