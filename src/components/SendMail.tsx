import emailjs from 'emailjs-com'
import Modal from 'react-modal'
import closeImg from '../assets/images/fechar.svg'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/sendMail.scss';

import { FormEvent, useState } from 'react';
import { mail } from '../services/email'

Modal.setAppElement('#root');

interface SendMailProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function SendMail({ isOpen, onRequestClose }: SendMailProps) {

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSendNewMessage(e: FormEvent) {

    e.preventDefault()
    try {
      const form = {
        name,
        subject,
        email,
        message
      }
      
      if (name === '' || subject === '' || email === '' || message === '') {
        toast.warn("Preencha todos os campos!")
        return;
      }

      const newMail = await emailjs.send(
        mail.serviceID,
        mail.templateID,
        form,
        mail.userID
      )

      if (newMail) {
        toast.success('E-mail enviado com sucesso!')

        setName('')
        setSubject('')
        setEmail('')
        setMessage('')

      } else {
        throw Error()
      }

    } catch {
      toast.error('Erro ao enviar o e-mail!')

    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-class"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <form onSubmit={handleSendNewMessage}>
        <h2>Obrigado por entrar em contato!</h2>
        <input
          name="name"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          name="subject"
          placeholder="Assunto"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Enviar</button>
      </form>
    </Modal>
  );
}