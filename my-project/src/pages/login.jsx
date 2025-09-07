import React from 'react';
import { LoginRegisterLayout } from '@/components/Layout';

import Head from "next/head";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { TextField } from '../components/Field';

const Login = () => {
  return (
    <>
      <Head>
        <title>Sign In - TaxWeb</title>
      </Head>

      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-20 w-auto -mb-10"></Logo>
        </Link>
      </div>

      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign In To Your Account
      </h2>

      <p className="mt-2 text-sm text-gray-700">
        Don't have an account?{" "}
        <Link href="/register" aria-label="Sign Up" className="font-medium text-[#78a5e6] hover:underline">Sign Up</Link>
        {" "} for a free trial
      </p>

      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          id="login_email"
          label="Email Address"
          name="login_email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <TextField
          id="login_password"
          label="Password"
          name="login_password"
          type="password"
          auto-complete="current-password"
          required
        />
        <Button
          type="submit"
          variant="solid"
          color="blue"
          className="w-full"
        >
          Sign In &rarr;
        </Button>
      </form >

    </>
  )
}

Login.Layout = LoginRegisterLayout;

export default Login;