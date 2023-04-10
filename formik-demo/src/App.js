import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './assets/css/output.css';

function SignUpForm() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg mt-8 font-sans">
          {/* // <Form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg mt-8"> */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor="name">Name</label>
              <Field className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="name" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor="email">Email Address</label>
              <Field className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="email" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2' htmlFor="password">Password</label>
              <Field className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>

            <div class="flex justify-center">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function App() {
  return <SignUpForm/>;
}

export default App;
