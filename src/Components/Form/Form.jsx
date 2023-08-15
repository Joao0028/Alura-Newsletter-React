export const Form = ({onSubmit})=>{

    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({name , email})
    }

    return (
        <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full gap-10 -mt-16 mx-5">
            <input required className=" alura-input" type="text" placeholder="Insira o seu nome"/>
            <input required className="alura-input" type="email" placeholder="Insira o seu e-mail"/>
            <button className=" alura-botao" type="submit">Seguir</button>
        </form>
    )
}