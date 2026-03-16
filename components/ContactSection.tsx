'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socialContacts = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/nicoranalli', username: '@nicoranalli' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/nicolas-ranalli', username: '/in/nicolas-ranalli' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/nicoranalli_', username: '@nicoranalli_' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const subject = encodeURIComponent(`Contacto desde Portfolio - ${formData.name}`)
    const body = encodeURIComponent(
      `${formData.message}`
    )
    const mailtoLink = `mailto:nicoranalli9@gmail.com?subject=${subject}&body=${body}`

    window.open(mailtoLink, '_blank')
    setStatus('sent')
    setFormData({ name: '', message: '' })

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#7EA3CC]">
          Contacto
        </h2>
        <p className="text-center text-[#a0b4c8] mb-12 text-base">
          ¡Hablemos!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1 glass-card p-7 md:p-9">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-semibold text-[#f0f4f8] mb-2 block">
                  Nombre
                </label>
                <Input
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-[#092749]/30 border-[#7EA3CC]/20 text-[#f0f4f8] placeholder:text-[#5a7a96] rounded-xl h-11 px-4 focus-visible:border-[#7EA3CC] focus-visible:ring-[#7EA3CC]/30"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#f0f4f8] mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  placeholder="Contame sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-[#092749]/30 border-[#7EA3CC]/20 text-[#f0f4f8] placeholder:text-[#5a7a96] rounded-xl px-4 py-3 resize-y focus-visible:border-[#7EA3CC] focus-visible:ring-[#7EA3CC]/30"
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#255C99] text-white py-3 h-auto rounded-xl font-semibold text-base hover:bg-[#7EA3CC] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,92,153,0.4)] transition-all duration-300"
              >
                {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Mensaje enviado!' : 'Enviar Mensaje'}
              </Button>
              {status === 'sent' && (
                <p className="text-sm text-[#7EA3CC] text-center">
                  Se abrió tu cliente de email con el mensaje. ¡Gracias!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-5 justify-center">
            {/* Email */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#7EA3CC]/15 text-[#7EA3CC]">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-[#a0b4c8]">Email</p>
                  <a
                    href="mailto:placeholder@email.com"
                    className="text-base font-semibold text-[#f0f4f8] hover:text-[#7EA3CC] transition-colors"
                  >
                    nicoranalli9@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {socialContacts.map((social) => (
              <div key={social.label} className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#7EA3CC]/15 text-[#7EA3CC]">
                    <social.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0b4c8]">{social.label}</p>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#f0f4f8] hover:text-[#7EA3CC] transition-colors"
                    >
                      {social.username}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
