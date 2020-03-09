import React from 'react';
import { Field, ErrorMessage } from 'formik';

import styles from './AppInput.module.css';

const AppInput = props => {
  const { name, type, placeholder, loading, containerStyle, ...otherProps } = props;

  return (
    <div className={styles.form__group} style={containerStyle}>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.form__input}
        disabled={loading}
        {...otherProps}
      />
      <ErrorMessage name={name}>{message => <label className={styles.form__error}>{message}</label>}</ErrorMessage>
    </div>
  );
};

export default AppInput;
