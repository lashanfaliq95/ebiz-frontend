import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import { AppInput, AppButton } from '../../components';

import styles from './Home.module.css';

const Home = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className={styles.root__div}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          companyName: '',
          number: '',
          city: '',
          address: '',
          services: '',
          phoneNumber: '',
          whatsappNumber: '',
          emailAddress: '',
          googleLocation: '',
          facebookLink: '',
          instagramLink: '',
          companyWebsite: '',
          imageUrl: ''
        }}
      >
        {({ values }) => {
          return (
            <Form className={styles.form__div}>
              <label className={styles.form__header}>Generate Digital Business Card</label>
              <div className={styles.form__container}>
                <div className={styles.flex__div}>
                  <label className={styles.section__header}>Mandatory Fields</label>
                  <div className={styles.nested__div}>
                    <AppInput name="firstName" type="text" placeholder="Enter First Name" loading={loading} />
                    <div className={styles.separator__div} />
                    <AppInput name="lastName" type="text" placeholder="Enter Last Name" loading={loading} />
                  </div>
                  <AppInput name="companyName" type="text" placeholder="Enter Company Name" loading={loading} />
                  <div className={styles.nested__div}>
                    <AppInput name="number" type="text" placeholder="Enter Phone Number" loading={loading} />
                    <div className={styles.separator__div} />
                    <AppInput name="city" type="text" placeholder="Enter City" loading={loading} />
                  </div>
                  <AppInput name="address" type="text" placeholder="Enter Address" loading={loading} />
                  <AppInput name="services" type="text" placeholder="Enter Services" loading={loading} />
                  <AppInput name="emailAddress" type="email" placeholder="Enter Email Address" loading={loading} />
                </div>
                <div className={styles.div__separator} />
                <div className={styles.flex__div}>
                  <label className={styles.section__header}>Optional Fields</label>
                  <div className={styles.nested__div}>
                    <AppInput name="phoneNumber" type="text" placeholder="Enter Phone Number" loading={loading} />
                    <div className={styles.separator__div} />
                    <AppInput name="whatsappNumber" type="text" placeholder="Enter WhatsApp Number" loading={loading} />
                  </div>
                  <AppInput name="googleLocation" type="text" placeholder="Enter Location" loading={loading} />
                  <AppInput
                    name="facebookLink"
                    type="text"
                    placeholder="Enter Facebook Profile URL"
                    loading={loading}
                  />
                  <AppInput
                    name="instagramLink"
                    type="text"
                    placeholder="Enter Instagram Profile URL"
                    loading={loading}
                  />
                  <AppInput name="companyWebsite" type="text" placeholder="Enter Company Website" loading={loading} />
                  <AppInput name="imageUrl" type="text" placeholder="Enter Image URL" loading={loading} />
                </div>
              </div>
              <AppButton
                text="Generate Business Card"
                type="submit"
                loading={loading}
                containerStyle={{ marginTop: '20px' }}
              />
              {error && <label className={styles.main__error}>{error}</label>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Home;
