import { Navbar } from "@/components/global/navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AuthenticatedLayout;
