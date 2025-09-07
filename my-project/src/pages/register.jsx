import React from 'react';
import { LoginRegisterLayout } from '@/components/Layout';
import Logo from '@/components/Logo';
import Link from "next/link";
import Head from "next/head";
import { TextField, SelectField } from "@/components/Field";
import Button from "@/components/Button"

const Register = () => {
  return (
    <>
      <Head>
        <title>Sign Up - TaxWeb</title>
      </Head>
      <div className="flex ">
        <Link href="/" aria-label="Home">
          <Logo className="h-20 w-auto -mb-10" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>

      <p>
        Already have an account?{" "}
        <Link href="/login" aria-label="Sign In" className="font-medium text-[#78a5e6] hover:underline">Sign In</Link>
        {" "}to your account.
      </p>

      <form action="#" className="mt-10 space-y-8 grid grid-cols-1 ">
        <div className="grid grid-cols-2 gap-x-8">
          <TextField
            id="first_name"
            label="First name"
            name="first_name"
            type="text"
            required
          />
          <TextField
            id="last_name"
            label="Last name"
            name="last_name"
            type="text"
            required
          />
        </div>
        <TextField
          id="email"
          label="Email address"
          className="cols-span-full"
          name="email"
          type="email"
          required
        />
        <TextField
          id="password"
          label="Password"
          className="cols-span-full"
          name="password"
          type="password"
          required
        />
        <SelectField
          className="cols-span-full"
          id="asq"
          label="How did you hear about us?"
          name="asq">
          <option value="1">Google</option>
          <option value="2">Facebook</option>
          <option value="3">Instagram</option>
        </SelectField>
        <Button
          type="submit"
          className="w-full"
          color="blue"
          variant="solid"
        >
          Sign Up &rarr;
        </Button>
      </form>
    </>
  )
}

Register.Layout = LoginRegisterLayout;

export default Register;