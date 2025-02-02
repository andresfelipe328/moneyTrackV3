import Image from "next/image";

import PageContentAnim from "@/components/animations/PageContentAnim";

const LinkToBankPage = () => {
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
            <h1>Link to your Bank!</h1>
          </div>

          <button className="w-1/2 mx-auto">
            <small>link</small>
          </button>
        </div>
      </PageContentAnim>
    </div>
  );
};

export default LinkToBankPage;
