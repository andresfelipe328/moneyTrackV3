import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SidebarMenu } from "./SidebarMenu";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const Sidebar = ({ show, setShow }: Props) => {
  const pathmame = useSearchParams();

  useEffect(() => {
    if (show) setShow(!show);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathmame]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {show && <SidebarMenu show={show} setShow={setShow} />}
      </AnimatePresence>
    </>
  );
};
