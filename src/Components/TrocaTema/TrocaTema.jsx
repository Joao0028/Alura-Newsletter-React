import { MoonIcon, SunIcon, BanknotesIcon  } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function TrocaTema(){
    const temaEscolhido = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(()=> {
        temaEscolhido && document.documentElement.classList.add(".dark")
    })

    const Muda = ()=> {
        document.documentElement.classList.toggle("dark")
    }

    return <div className="hidden sm:block">
        <MoonIcon className=" h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={Muda}/>
        <SunIcon className="hidden h-8 text-gray-100 dark:block cursor-pointer" onClick={Muda}/>
    </div>
}