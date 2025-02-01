import PageContentAnim from "@/components/animations/PageContentAnim";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const user = await getServerSession();
  // const isUserLinked = await isLinked({ userID: user?.user?.email });

  return (
    <div className="content">
      <PageContentAnim style="">
        <h1>Home Page | {user?.user?.name}</h1>
      </PageContentAnim>
    </div>
  );
}
