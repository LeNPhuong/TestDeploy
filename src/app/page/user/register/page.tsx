'use client'

import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React from 'react'
import { object, string } from 'yup'

let userSchema = object({
  email: string().email('Sai định dạng').required('Vui lòng nhập email'),
  password: string().required('Vui lòng nhập mật khẩu').min(10),
  agpassword: string().required('Vui lòng nhập lại mật khẩu').min(10),
})

const errorMessage = (message: any) => <p className="text-red-500">{message}</p>

const page = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Đăng ký
            </h1>
            <Formik
              initialValues={{
                email: '',
                password: '',
                agpassword: '',
              }}
              validationSchema={userSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" render={errorMessage} />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Mật khẩu
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <ErrorMessage name="password" render={errorMessage} />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <Field
                    type="password"
                    name="password-again"
                    id="password-again"
                    placeholder="Nhập lại mật khẩu"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <ErrorMessage name="agpassword" render={errorMessage} />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Đăng ký
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Bạn đã có tài khoản ?{' '}
                  <Link
                    href="login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Đăng nhập
                  </Link>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
