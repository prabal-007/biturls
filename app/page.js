import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-red-50">
      <section className="grid grid-cols-2 h-[50vh] p-16 gap-16">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-black text-2xl font-extrabold">The best URl shortner!</p>
          <p className="p-5 pt-0 text-wrap text-center text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui fugiat libero quis, reiciendis vel quam, Lorem ipsum dolor sit amet. ab beatae sint ut natus. Sunt minima ad doloribus culpa?</p>
          <div className='flex px-2 justify-between items-center gap-2 font-bold text-sm'>
            <Link href='/generate'><button className='bg-red-500 px-3 py-1 rounded-lg hover:bg-red-400 '>Try Now</button></Link>
            <Link href='/github'><button className='bg-red-500 px-3 py-1 rounded-lg hover:bg-red-400 '>GitHub</button></Link>
            </div>
        </div>
        <div className="relative">
          <Image src={"/meeting.png"} alt="BitUrl Desk" fill={true} className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
