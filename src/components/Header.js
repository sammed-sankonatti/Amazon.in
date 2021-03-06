import Image from "next/image";
import {
  FlagIcon,
  PlayIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="sticky top-0 z-40" >
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 " >
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0" >
                    <Image 
                        src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png" 
                        width={150}
                        height={40}   
                        objectFit="contain" 
                        className="cursor-pointer"
                        />
                </div>

                <div className="bg-yellow-400 items-center  h-10 rounded-md flex-grow cursor-pointer  hover:bg-yellow-500 hidden sm:flex" >
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md  focus:outline-none px-4 " type="text" />
                    <SearchIcon  className="h-12 p-4"/>
                </div>

                {/* right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap " >
                    <div className=" link ">
                        <p>Hello sammed</p>
                        <p className="font-bold md:text-sm" >Account & lists</p>
                    </div>
                    <div className=" link ">
                        <p>Returns</p>
                        <p className="font-bold md:text-sm" >& Orders</p>
                    </div>
                    <div className=" relative link  flex items-center  ">
                        <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full " > 4 </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className=" hidden md:inline mt-2 font-bold md:text-sm  " >Cart</p>
                    </div>
                </div>

            </div>
            {/* bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm" >
                <p className="link flex items-center" > 
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime</p>
                <p className="link">Mobiles</p>
                <p className="link">Fashion</p>
                <p className="link">computers</p>
                <p className="hidden link lg:inline-flex">Electronics</p>
                <p className="hidden link lg:inline-flex">Food & Grocery </p>
                <p className="hidden link lg:inline-flex"> Prime </p>
                <p className="hidden link lg:inline-flex"> Buy Again </p>
                <p className="hidden link lg:inline-flex">Shopper Toolkit </p>
                <p className="hidden link lg:inline-flex"> Health & personal Care </p>


            </div>
        </header>
    )
}

export default Header;
