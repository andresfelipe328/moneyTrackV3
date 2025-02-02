import PageContentAnim from "@/components/animations/PageContentAnim";
import { isLinked } from "@/lib/actions/link-to-bank-verification/isLinked";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await getServerSession();
  const isUserLinked = await isLinked({ userID: user?.user?.email });

  if (!isUserLinked?.linked) redirect("/link-to-bank");
  return (
    <div className="content">
      <PageContentAnim style="">
        <h1>Home Page | {user?.user?.name}</h1>
      </PageContentAnim>
    </div>
  );
}
