import { Example } from '@/components/Example';

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log('rendering page with id:', id);

  return (
    <div>
      <Example id={id} />
    </div>
  );
};

export default Page;
