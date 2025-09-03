import React, { useState } from "react";
import styled from "styled-components";

// Components
import { Footer, Navbar } from "../../widgets";

import { FormInvalid } from "../../shared/";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "This field is required";
    if (!form.lastName.trim()) newErrors.lastName = "This field is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Please enter a valid email address";
    if (!form.phone.trim()) newErrors.phone = "This field is required";
    if (!form.message.trim()) newErrors.message = "This field is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted ✅", form);
      // здесь можно отправить данные на сервер
    }
  };

  return (
    <>
      <Navbar />
      <StyleMain>
        <div className="contact">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-form">
              <h1>Get in touch with sales</h1>
              <p>
                We’ll help you find the right solutions and pricing for your
                business. Fill out the form below and our team will get back to
                you shortly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="user-data">
                  <div className="user-data-grid">
                    {/* First Name */}
                    <div className="user-data-item">
                      <label>First Name</label>
                      <div className="user-data-input">
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && (
                          <div className="formInvalidIcon">
                            <FormInvalid />
                          </div>
                        )}
                      </div>
                      {errors.firstName && (
                        <div className="formInvalidText">
                          <FormInvalid />
                          {errors.firstName}
                        </div>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="user-data-item">
                      <label>Last Name</label>
                      <div className="user-data-input">
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && (
                          <div className="formInvalidIcon">
                            <FormInvalid />
                          </div>
                        )}
                      </div>
                      {errors.lastName && (
                        <div className="formInvalidText">
                          <FormInvalid />
                          {errors.lastName}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="user-data-item">
                      <label>Work Email</label>
                      <div className="user-data-input">
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div className="formInvalidIcon">
                            <FormInvalid />
                          </div>
                        )}
                      </div>
                      {errors.email && (
                        <div className="formInvalidText">
                          <FormInvalid />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="user-data-item">
                      <label>Phone Number</label>
                      <div className="user-data-input">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <div className="formInvalidIcon">
                            <FormInvalid />
                          </div>
                        )}
                      </div>
                      {errors.phone && (
                        <div className="formInvalidText">
                          <FormInvalid />
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="user-data-item user-data-item-span2">
                      <label>Message</label>
                      <div className="user-data-input">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <div className="formInvalidIcon">
                            <FormInvalid />
                          </div>
                        )}
                      </div>
                      {errors.message && (
                        <div className="formInvalidText">
                          <FormInvalid />
                          {errors.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <p>
                  By submitting my personal data, I consent to Zendesk
                  collecting, processing, and storing my information in
                  accordance with the{" "}
                  <Link to="/">WebElder Privacy Notice.</Link>
                </p>
                <div className="contact-link">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </StyleMain>
      <Footer />
    </>
  );
};

const StyleMain = styled.main`
  .contact {
    max-width: 1120px;
    position: relative;
    margin: 0 auto;
    padding: 80px 0;

    @media screen and (max-width: 768px) {
      padding: 50px 4%;
    }

    .contact-title {
      color: rgb(17, 17, 13);
      margin: 0px 0px 8px;
      font-weight: 700;
      font-size: 12px;
      line-height: 1.3;
      text-transform: uppercase;
      gap: 8px;
      letter-spacing: 0.75px;
    }

    .contact-grid {
      display: flex;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      .contact-form {
        flex: 0 0 50%;
        -webkit-box-flex: 0;
        max-width: 50%;

        @media screen and (max-width: 768px) {
          flex: 0 0 100%;
          max-width: 100%;
        }

        h1 {
          color: var(--black);
          margin: 0px 0px 24px;
          font-weight: 500;
          font-size: 40px;
          line-height: 1.15;

          @media screen and (max-width: 768px) {
            font-size: 30px;
          }
        }

        p {
          color: var(--black);
          font-weight: 400;
          font-size: 16px;
          line-height: 1.45;
          margin: 0px 0px 16px;
          width: 100%;

          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
        }

        .user-data {
          .user-data-grid {
            display: grid;
            gap: 24px;
            grid-column: span 2;
            grid-template-columns: repeat(2, 1fr);

            @media screen and (max-width: 768px) {
              grid-template-columns: repeat(1, 1fr);
            }

            .user-data-item {
              display: flex;
              flex-direction: column;
              gap: 12px;

              .formInvalidText {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 13px;
                font-weight: 500;
                color: #b84242ff;
              }

              label {
                font-size: 15px;
                font-weight: 500;
                color: var(--black);
              }

              .user-data-input {
                position: relative;

                input,
                textarea {
                  background: rgba(17, 17, 13, 0.05);
                  border-radius: 12px;
                  border: none;
                  box-shadow: rgba(17, 17, 13, 0.47) 0px 0px 0px 1px inset;
                  font-size: 15px;
                  line-height: 21px;
                  min-height: 48px;
                  padding: 12px;
                  color: rgb(17, 17, 13);
                  width: 100%;
                  resize: none;
                  overflow: auto;
                  width: 100%;

                  &:hover {
                    box-shadow: rgba(17, 17, 13, 0.47) 0px 0px 0px 1px inset;
                  }

                  &:focus-visible {
                    background: rgba(17, 17, 13, 0.11);
                    color: rgb(17, 17, 13);
                    box-shadow: rgb(17, 17, 13) 0px 0px 0px 2px inset;
                    outline: rgba(17, 17, 13, 0.47) solid 2px;
                    outline-offset: 3px;
                  }
                }

                textarea {
                  height: 68px;
                }

                .formInvalidIcon {
                  position: absolute;
                  right: 12px;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
            }

            .user-data-item-span2 {
              grid-column: span 2;

              @media screen and (max-width: 768px) {
                grid-column: span 1;
              }
            }
          }
        }

        .contact-link {
          button {
            width: 100%;
            font-weight: 600;
            color: var(--white);
            position: relative;
            padding: 10px 20px;
            border-radius: 16px;
            line-height: 28px;
            font-size: 17px;
            background: var(--accent);
            cursor: pointer;
            border: none;
            transition: background 0.3s ease;

            &:hover {
              background: #813b7e;
            }
          }
        }
      }

      .contact-hr {
        flex: 0 0 8.33333%;
        -webkit-box-flex: 0;
        max-width: 8.33333%;
        padding-right: 12px;
        padding-left: 12px;
      }

      .contact-info {
        flex: 0 0 41.6667%;
        -webkit-box-flex: 0;
        max-width: 41.6667%;
        padding-right: 12px;
        padding-left: 12px;
      }
    }
  }
`;

export default Contact;
