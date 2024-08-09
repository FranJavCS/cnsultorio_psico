import SpecialistGrid from "@/components/catalogo/SpealistGrid";

async function getSpecialist() {
  const res = await fetch(
    "http://localhost:3000/api/specialist/get-list-specialist",
    { cache: "no-store" },
  );

  return res.json();
}
export default async function Page() {
  const response = await getSpecialist();

  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="inline-block max-w-5xl text-center justify-center">
        <h1 className="text-4xl mb-5 text-secondary">CATALOGO</h1>
        {/*  <Suspense fallback={<div>Loading...</div>}> */}
        <SpecialistGrid specialists={response.data} />
        {/* </Suspense> */}
      </div>
    </section>
  );
}
