import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const styles = {
  main: {
    justifyContent: 'flex-start',
    paddingBottom: '10px',
  },
  h2: {
    fontSize: '28px',
    padding: '25px 0 20px 0',
  },
  form: {
    border: 'none',
    borderRadius: '0',
    padding: '0',
    backgroundColor: 'transparent',
    width: '100%',
  },
  label: {
    display: 'block',
    padding: '12px 0 8px 0',
    fontSize: '15px',
  },
  error: {
    color: '#dc3545',
    fontSize: '14px',
    marginTop: '-10px',
    marginBottom: '10px',
  },
  successMessage: {
    color: '#28a745',
    fontSize: '16px',
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#d4edda',
    borderRadius: '4px',
  },
  errorMessage: {
    color: '#dc3545',
    fontSize: '16px',
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#f8d7da',
    borderRadius: '4px',
  },
  input: {
    padding: '10px',
    backgroundColor: '#ffffff',
    color: 'rgb(10, 10, 10)',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    backgroundColor: '#ffffff',
    color: 'rgb(10, 10, 10)',
    width: '100%',
    height: '200px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontFamily: 'inherit',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0066cc',
    color: '#ffffff',
    width: 'auto',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonDisabled: {
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: '#ffffff',
    width: 'auto',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
  },
  emailText: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  emailLink: {
    color: '#0066cc',
    textDecoration: 'none',
  },
  orText: {
    fontSize: '16px',
    marginBottom: '20px',
  },
};
export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
      userMessage: '',
    },
  });
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setSubmitStatus({ type: 'success', message: 'Message sent, thank you!' });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: `Something went wrong: ${error.text || 'Please try again.'}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={styles.main}>
      <h2 style={styles.h2}>Contact Me</h2>
      <p style={styles.emailText}>
        Email me at <a href="mailto:lelandoj@gmail.com" style={styles.emailLink}>lelandoj@gmail.com</a>
      </p>
      <p style={styles.emailText}>
        Connect on <a href="https://www.linkedin.com/in/leland-c-johnson/" style={styles.emailLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p style={styles.orText}>Or you can contact me using this form:</p>
      {submitStatus && (
        <p style={submitStatus.type === 'success' ? styles.successMessage : styles.errorMessage}>
          {submitStatus.message}
        </p>
      )}
      <form style={styles.form} ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName" style={styles.label}>Name:</label>
        <input
          id="userName"
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
        {errors.userName && <p style={styles.error}>{errors.userName.message}</p>}
        <label htmlFor="userEmail" style={styles.label}>Email:</label>
        <input
          id="userEmail"
          style={styles.input}
          {...register('userEmail', {
            required: 'Email is required',
            validate: validateEmail,
          })}
          type="email"
          placeholder="Your email here"
        />
        {errors.userEmail && <p style={styles.error}>{errors.userEmail.message}</p>}
        <label htmlFor="userMessage" style={styles.label}>Message:</label>
        <textarea
          id="userMessage"
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
        {errors.userMessage && <p style={styles.error}>{errors.userMessage.message}</p>}
        <button
          style={isSubmitting ? styles.buttonDisabled : styles.button}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </main>
  );
}
