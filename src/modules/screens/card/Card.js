import React from 'react';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { IoMdGlobe } from 'react-icons/io';

import logo from '../../static/brand.png';
import styles from './Card.module.css';

const Card = props => {
  return (
    <div className={styles.root__div}>
      <div className={styles.card__div}>
        <div className={styles.parent__div}>
          <div className={styles.details__div}>
            <div className={styles.header__div}>
              <label>Company Name</label>
            </div>
            <div className={styles.content__div}>
              <label>M. Shahid Hassan</label>
              <label>+94774406047</label>
              <label>434/B, Enderamulla</label>
              <label>Wattala</label>
              <label>Web application development</label>
            </div>
          </div>
          <div className={styles.image__div}>
            <img src={logo} className={styles.brand__logo} alt="logo" />
          </div>
        </div>
        <div className={styles.footer__div}>
          <div className={styles.icon__div}>
            <FaPhone size={25} color="black" />
          </div>
          <div className={styles.icon__div}>
            <FaWhatsapp size={25} color="black" />
          </div>
          <div className={styles.icon__div}>
            <AiOutlineMail size={25} color="black" />
          </div>
          <div className={styles.icon__div}>
            <GoLocation size={25} color="black" />
          </div>
          <div className={styles.icon__div}>
            <AiFillFacebook size={25} color="black" />
          </div>
          <div className={styles.icon__div}>
            <AiOutlineInstagram size={25} color="black" />
          </div>
          <div className={styles.icon__div}>
            <IoMdGlobe size={25} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
