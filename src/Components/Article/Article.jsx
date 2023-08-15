export const Article = ({ title, text, tags, image, alt }) => {
    return <div className="p-5 bg-gray-200 flex flex-col items-center gap-2 dark:bg-dark-200 sm:rounded-xl sm:shadow-md sm:hover:shadow-gray-600 sm:dark:hover:shadow-black sm:hover:shadow-lg">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        
        <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
            {
                tags.map(tag => <span key={tag} className="px-4 text-gray-200 text-xs font-bold uppercase dark:text-gray-400 dark:bg-dark-100 rounded-full py-1 bg-alura-100 hover:bg-gradient-to-r hover:from-alura-200 hover:to-alura-100 hover:scale-110 ">{tag}</span> )
            }
        </div>
        
        <div className="grid gap-1">
            {
                text.map((content, index) => <p className="text-alura-200 dark:text-gray-400" key={index}>{content}</p>)
            }
        </div>
        {image && <img src={image} className="sm:p-4"/>}
        {image && <span className="sr-only">{alt}</span>}
    </div>
}