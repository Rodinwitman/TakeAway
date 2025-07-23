'use client'
import useRegisterForm from '@/hooks/useRegisterForm'
import React from 'react'

type RegisterFormProps = {
    onSwitch: () => void
}

const RegisterForm = ({onSwitch}: RegisterFormProps) => {
    const {form, errors, handleChange, handleSubmit} = useRegisterForm()
    return (
        <div className="relative">
            <h2 className='text-3xl font-extrabold text-center mb-2 tracking-tight'>S'inscrire</h2>
            <p className='text-center'>Rejoignez-nous et commandez sans attendre.</p>
            <form className='mt-6 space-y-5 perspective-1000' onSubmit={handleSubmit((data) => {
                console.log("Inscription réussi", data)
                //mutation appollo
            })} > 
                <div className="group">
                    <input
                        name='name'
                        type="text"
                        placeholder='Nom'
                        className='w-full p-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 focus:border-transparent transition-all'
                    />
                    {errors.name && <p className='text-red-400 text-sm'>{errors.name}</p>}
                </div>
                <div className="group">
                    <input
                        name='email'
                        type="email"
                        placeholder='Email'
                        className='w-full p-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 focus:border-transparent transition-all'
                    />
                    {errors.email && <p className='text-red-400 text-sm'>{errors.email}</p>}
                </div>
                <div className="group">
                    <input
                        name='password'
                        type="password"
                        placeholder='Mot de passe'
                        className='w-full p-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 focus:border-transparent transition-all'
                    />
                    {errors.password && <p className='text-red-400 text-sm'>{errors.password}</p>}
                </div>
                <div className="group">
                    <input
                        name='phone'
                        type="phone"
                        placeholder='Numéro de téléphone'
                        className='w-full p-2 bg-red-500/10 rounded-xl border border-red-400/50 text-black placeholder-black/50 outline-none focus:ring-1 focus:border-transparent transition-all'
                    />
                    {errors.phone && <p className='text-red-400 text-sm'>{errors.phone}</p>}
                </div>
                <button className='group w-full p-2 bg-gradient-to-r from-red-500 to-red-400 text-green-950 rounded-xl font-bold shadow-lg
                        hover:shadow-red-400/40 overflow-hidden transform transform-style-3d hover:-translate-y-.5 hover:scale-105 hover:translate-z-20 transition-all duration-300
                        '>
                    <span className='relative z-10 pointer-events-none'>Se connecter</span>
                    <span className='absolute inset-0 bg-gradient-t-r from-red-500 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></span>
                </button>
            </form>
            <p className="mt-2 text-black-200 text-center">
                Déjà avoir une compte?
                    <span onClick={onSwitch} className="text-red-300 font-bold cursor-pointer hover:text-red-400 transition-colors">
                        Se connecter
                    </span>
            </p>
        </div>
    )
}
export default RegisterForm