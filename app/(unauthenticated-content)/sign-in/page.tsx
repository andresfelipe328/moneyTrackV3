import Image from "next/image";

import { FcGoogle } from "react-icons/fc";
import PageContentAnim from "@/components/animations/PageContentAnim";
import SignInForm from "@/components/forms/SignInForm";
import Link from "next/link";

const SigninPage = () => {
  return (
    <div className="content min-h-screen items-center justify-center">
      <PageContentAnim style="">
        <div className="flex flex-col gap-5 min-w-[320px] p-5">
          <div className="flex items-center justify-between">
            <Image
              src={"/logo.svg"}
              width={75}
              height={75}
              priority
              alt="Logo"
              className="drop-shadow-md"
              style={{ width: "75px", height: "75px" }}
            />
            <h1>Welcome Back!</h1>
          </div>

          <SignInForm />

          <small className="mx-auto">or sign-in using</small>
          <FcGoogle className="mx-auto text-5xl drop-shadow-md" />
          <div className="flex items-center justify-center w-full gap-5">
            <p>Still don&apos;t have an account</p>
            <Link href={"/register"} className="button">
              <small>register</small>
            </Link>
          </div>
        </div>
      </PageContentAnim>
    </div>
  );
};

export default SigninPage;
