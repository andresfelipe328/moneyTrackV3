import React, { Suspense } from "react";
import { Navbar } from "@/components/global/navbar/Navbar";
import { Provider } from "../sessionProvider";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <Suspense>
      <Provider>
        <Navbar />
        {children}
      </Provider>
    </Suspense>
  );
};

export default AuthenticatedLayout;
