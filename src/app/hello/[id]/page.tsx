export const dynamic = "force-dynamic";

import { IdExample } from "src/components/IdExample";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <IdExample id={id} />
    </div>
  );
};

export default Page;
