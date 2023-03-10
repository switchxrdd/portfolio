import Link from "next/link";
export default function Header() {
  return (
    <div className="justify-between w-full items-center text-center mx-auto flex mt-6">
      <div className="text-3xl font-bold text-white">switchxrd<span className="text-primary text-2xl">.vercel</span><span className="text-white text-[19px]">.app</span></div>
      <div className="flex space-x-8">
        <Link href="/">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">Home</div>
        </Link>
        <Link href="/projects">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">Projects</div>
        </Link>
        <Link href="/">
          <div className="text-base transition-all duration-300 font-medium hover:text-white cursor-pointer">Blog</div>
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link href="https://discord.com/users/847092784573186069" className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
          <i className="fab fa-discord"></i>
        </Link>
        <Link href="https://github.com/switchxrdd" className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
          <i className="fab fa-github"></i>
        </Link>
        <Link href="https://twitter.com/switchxrd" className="text-white hover:bg-zinc-400/20 transition-all flex items-center justify-center cursor-pointer social w-10 h-10 rounded-full">
          <i className="fab fa-twitter"></i>
        </Link>
      </div>
    </div>
  );
}
