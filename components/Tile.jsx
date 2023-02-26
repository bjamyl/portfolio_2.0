export default function Tile({ title, description }) {
  return (
    <section className="mx-4 md:mx-8 lg:mx-16 2xl:mx-96">
      <div className="w-full border-b-[0.7px] flex justify-between ">
        <h1 className="text-[#ed9022] text-4xl font-sans md:text-3xl xl:text-5xl">{title}</h1>
        <p className="text-slate-50 font-body 2xl:text-xl">{description}</p>
      </div>
    </section>
  );
}
