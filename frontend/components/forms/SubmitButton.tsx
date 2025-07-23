'use client'

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // si tu utilises la fonction cn
import { HTMLAttributes } from 'react';

type Props = {
  loading: boolean;
  text?: string;
} & HTMLAttributes<HTMLButtonElement>;

const SubmitButton = ({ loading, text = 'Envoyer', className, ...props }: Props) => {
  return (
    <button
      type='submit'
      disabled={loading}
      {...props}
      className={cn(
        'group w-full p-2 bg-gradient-to-r from-red-500 to-red-400 text-green-950 rounded-xl font-bold shadow-lg hover:shadow-red-400/40 overflow-hidden transform hover:scale-105 transition-all duration-300',
        className
      )}
    >
      <span className='relative z-10 pointer-events-none'>
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Traitement...
          </span>
        ) : (
          text
        )}
      </span>
      <span className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></span>
    </button>
  );
};

export default SubmitButton;
