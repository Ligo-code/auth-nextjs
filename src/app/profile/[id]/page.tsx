export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="flex items-center gap-2 text-3xl font-bold">
        Profile Page
        <span className="rounded bg-orange-500 p-2 text-white">{id}</span>
      </h1>
    </div>
  );
}
