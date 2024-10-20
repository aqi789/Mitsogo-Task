import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section className="pt-10 pr-20 pl-20 pb-10 bg-[#f7f7f7] w-full h-full">
        <h2 className="font-semibold text-3xl ">hexnode</h2>

        <div className="">
          <div>
            <h3 className="font-semibold text-3xl mt-32">
              Try Hexnode free for 14 days
            </h3>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-10"
            >
              <input
                type="email"
                name="email"
                placeholder="Your work email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pt-3 pb-3 pl-3 pr-10 lg:pr-28 rounded-md outline-none mb-3 lg:mb-0 w-1/2 border lg:w-auto"
              />
              <div className="w-1/2">
                <button
                  type="submit"
                  className="bg-[#bb022a] w-full rounded-md pt-3 pb-3 lg:w-1/3 ml-0 lg:ml-3 uppercase text-white text-lg"
                >
                  Let's try it out!
                </button>
              </div>
            </form>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 mt-1">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="bg-[#f7f7f7] pt-80 w-full flex flex-col md:flex-row justify-between items-center ">
          <div>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-[#333] text-xs md:text-sm">
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-[#333] text-xs md:text-sm text-center md:text-left">
              Copyright © 2024 Mitsogo Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
