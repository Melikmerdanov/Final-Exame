import { Formik } from "formik"
import * as Yup from "yup"
import React from 'react'
import './Sign.scss'
import {Helmet} from "react-helmet"
const Add = () => {
  return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Drimo - Sign Up</title>
          <link rel="stylesheet" href="./Sign" />
        </Helmet>
        <div className="magic-form">
            <Formik
                initialValues={{
                    firstname: "",
                    lastname:"",
                    email: "",
                    password: ""
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Ad daxil edin!"),
                    email: Yup.string().email().required("Email daxil edin!"),
                    password: Yup.string().min(8,"Şifrə ən az 8 elementdən ibarət olmalıdır!").required("Şifrəni daxil edin!")
                })}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false)
                        resetForm()
                    }, 2000);
                }}
            >
                {({ values, handleChange, dirty, errors, touched, handleSubmit, isSubmitting }) => (
                    <form className="magic-form" onSubmit={handleSubmit}>
                        <h3>Sign up</h3>
                        <label htmlFor="name">First name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            id="firstname"
                            className="input"
                            value={values.firstname}
                            onChange={handleChange}
                        />
                        {errors.name && touched.firstname && (
                            <div className="input-feedback">{errors.firstname}</div>
                        )}

                        <label htmlFor="name">Last name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            id="lastname"
                            className="input"
                            value={values.lastname}
                            onChange={handleChange}
                        />
                        {errors.name && touched.lastname && (
                            <div className="input-feedback">{errors.lastname}</div>
                        )}

                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            id="email"
                            className="input"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            id="password"
                            className="input"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}

                        <button type="submit" disabled={!dirty || isSubmitting} >Sign up</button>
                    </form>
                )}
            </Formik>
        </div>
    </div>
)
}

export default Add