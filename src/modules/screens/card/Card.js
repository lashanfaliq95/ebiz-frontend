import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import cogoToast from "cogo-toast";

import { FaPhone, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineInstagram
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoMdGlobe } from "react-icons/io";

import logo from "../../static/brand.png";
import styles from "./Card.module.css";

const onClickCopyToClipBoard = e => {
  const { text } = e.currentTarget.dataset;
  cogoToast.success("Copied to clipboard!");
  navigator.clipboard.writeText(text);
};

const Card = props => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    fetch("http://localhost:8080/api/" + id, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setDetails(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.match.params]);

  return (
    <div className={styles.root__div}>
      <div className={styles.card__div}>
        <div className={styles.parent__div}>
          <div className={styles.details__div}>
            <div className={styles.header__div}>
              <label>{details.companyName}</label>
            </div>
            <div className={styles.content__div}>
              <label>{details.name}</label>
              <label>{details.number}</label>
              <label>{details.address}</label>
              <label>{details.city}</label>
              <label>{details.services}</label>
            </div>
          </div>
          <div className={styles.image__div}>
            <img
              src={details.image || logo}
              className={styles.brand__logo}
              alt="logo"
            />
          </div>
        </div>
        <div className={styles.footer__div}>
          {details.phoneNumber && (
            <div
              className={styles.icon__div}
              onClick={onClickCopyToClipBoard}
              data-text={details.phoneNumber}
            >
              <FaPhone size={25} color="black" />
            </div>
          )}
          {details.phoneNumber && (
            <a
              href={
                "https://api.whatsapp.com/send?text=" + window.location.href
              }
              data-action="share/whatsapp/share"
            >
              <div className={styles.icon__div}>
                <FaWhatsapp size={25} color="black" />
              </div>
            </a>
          )}
          {details.email && (
            <div
              className={styles.icon__div}
              onClick={onClickCopyToClipBoard}
              data-text={details.email}
            >
              <AiOutlineMail size={25} color="black" />
            </div>
          )}
          {details.googleLocation && (
            <a href={details.googleLocation}>
              <div className={styles.icon__div}>
                <GoLocation size={25} color="black" />
              </div>
            </a>
          )}
          {details.facebookLink && (
            <a href={details.facebookLink}>
              <div className={styles.icon__div}>
                <AiFillFacebook size={25} color="black" />
              </div>
            </a>
          )}

          {details.instagramLink && (
            <a href={details.instagramLink}>
              <div className={styles.icon__div}>
                <AiOutlineInstagram size={25} color="black" />
              </div>
            </a>
          )}
          {details.companyWebsite && (
            <a href={details.companyWebsite}>
              <div className={styles.icon__div}>
                <IoMdGlobe size={25} color="black" />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
