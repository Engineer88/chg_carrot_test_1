import BillionInfo from "@/components/billion-info";

interface BillionDetailProps {
  params: { id: string };
}

export default async function BillionDetail({ params }: BillionDetailProps) {
  const awaitedParams = await params;
  return (
    <div className="bg-black text-white flex flex-col items-center">
      <BillionInfo id={awaitedParams.id} />
    </div>
  );
}
