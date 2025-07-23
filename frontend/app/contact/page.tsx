'use client'
import { useForm } from 'react-hook-form'
import EmailField from '@/components/forms/EmailField'
import { Form } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import SubmitButton from '@/components/forms/SubmitButton'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactPage = () => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
  })

  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-12 px-6 py-12 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Restons en contact
        </h1>

        <Form {...form}>
          <div className="space-y-6">
            <EmailField control={form.control} />
            <Textarea placeholder="Écrire votre message ici..." />
            <SubmitButton
              loading={false}
              text="Envoyer votre message"
              className="w-full sm:w-[220px] mx-auto"
            />
          </div>
        </Form>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Infos utiles</h2>

        <div className="flex items-start gap-4 text-gray-700">
          <Mail className="text-red-500 mt-1" />
          <span>TakeAway@gmail.com</span>
        </div>

        <div className="flex items-start gap-4 text-gray-700">
          <Phone className="text-red-500 mt-1" />
          <span>+261 34 16 787 30</span>
        </div>

        <div className="flex items-start gap-4 text-gray-700">
          <MapPin className="text-red-500 mt-1" />
          <span>Antananarivo, Madagascar</span>
        </div>
      </div>
    </section>

  )
}

export default ContactPage
