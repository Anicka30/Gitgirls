
import Image from "next/image";
import w3o from  "public/w3o2.png"
import Girls from "public/Git.png"


const Header = () => {
    return(  
    <header className="flex flex-row items-center justify-center p-5">
      <Image className="w-[15vw] h-[10vh] mr-auto" src={w3o} alt="w3o" />
      <h1 className="text-white text-center">W 3 O L A B S</h1>
      <Image className="w-[15vw] h-[10vh] ml-auto" src={Girls} alt="Girls In Tech" />
    </header>
    )
}


export default Header;