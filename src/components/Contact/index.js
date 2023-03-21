import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const styles = {
  main: {
    justifyContent: 'flex-start',
    paddingBottom: '25px',
  },
  h2: {
    fontSize: '32px',
    padding: '8px',
  },
  form: {
    border: 'groove',
    borderRadius: '8px',
    padding: '8px',
    backgroundColor: 'rgb(45, 20, 90)',
    width: '90vw',
    maxWidth: '800px',
  },
  h3: {
    padding: '8px',
    backgroundColor: 'rgb(45, 20, 90)',
  },
  input: {
    padding: '8px',
    backgroundColor: 'rgb(225, 225, 225)',
    color: 'rgb(10, 10, 10)',
  },
  textarea: {
    padding: '8px',
    backgroundColor: 'rgb(225, 225, 225)',
    color: 'rgb(10, 10, 10)',
    width: '85%',
    height: '25vw',
  },
  button: {
    padding: '8px',
    backgroundColor: 'rgb(225, 225, 225)',
    color: 'rgb(10, 10, 10)',
    width: '100px',
  },
};
export function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
      userMessage: '',
    },
  });
  const form = useRef();

  async function sendEmail() {
    await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent, thank you!');
        },
        (error) => {
          alert(error.status, 'Something went wrong', error.text);
        }
      );
  }
  const onSubmit = (e) => {
    sendEmail(e);
    setValue('userName', '');
    setValue('userEmail', '');
    setValue('userMessage', '');
  };

  return (
    <main style={styles.main}>
      <h2 style={styles.h2}>Contact Me</h2>
      <form style={styles.form} ref={form} onSubmit={handleSubmit(onSubmit)}>
        <h3 style={styles.h3}>Name:</h3>
        <input
          style={styles.input}
          {...register('userName', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Minimum two characters.',
            },
          })}
          type="text"
          placeholder="Your name here"
        />
        <p style={styles.h3}>{errors.userName?.message}</p>
        <h3 style={styles.h3}>Email:</h3>
        <input
          style={styles.input}
          {...register('userEmail', {
            required: 'email is required',
            validateEmail,
          })}
          type="email"
          placeholder="Your email here"
        />
        <p style={styles.h3}>{errors.userEmail?.message}</p>
        <h3 style={styles.h3}>Message:</h3>
        <textarea
          style={styles.textarea}
          {...register('userMessage', {
            required: 'Please provide me with a message to reply to',
            minLength: {
              value: 2,
              message: 'Provide me with a message to reply to',
            },
          })}
          placeholder="Your message here"
        />
        <p style={styles.h3}>{errors.userMessage?.message}</p>
        <br />
        <button style={styles.button} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
