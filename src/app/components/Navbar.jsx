import Image from "next/image";
import Link from "next/link";
import Logo from "./../../../public/logo.png";

export default function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-zinc-900 p-5 pl-[40px] mb-10">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <span class="font-semibold text-xl tracking-tight">NFT Nexus</span>
        </Link>
        <Link href="/">
          <Image
            className="invert mx-[8px]"
            src={Logo}
            width={25}
            height={25}
            alt="logo"
          />
        </Link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 text-lg hover:text-white mr-4"
          >
            Popular
          </a> */}
        </div>
        {/* <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div> */}
      </div>
    </nav>
  );
}
