import TrocaTema from "../TrocaTema/TrocaTema"


export const Header = ({user}) => {
    return <header className="flex h-20 bg-alura-200 justify-between dark:bg-dark-200 items-center px-5 sm:rounded-xl sm:m-5">
        <span className="text-gray-100">Olá, {user?.name || "usuário" }!</span>
        <h1>Alura Newsletter</h1>

        <TrocaTema/>
    </header>
}