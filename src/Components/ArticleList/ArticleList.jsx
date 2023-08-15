import data from "../../../articles.json"
import { Article } from "../Article/Article"

export default function ArticleList(){
    return(
        <>
            <div className="mt-5 grid gap-5 sm:mt-0 sm:grid-cols-2 m-auto max-w-2xl lg:grid-cols-3 dark:text-gray-100 lg:max-w-[1000px]">
                {
                    data.map((props, index) => <Article key={index}{...props}/>)
                }
            </div>
        </>
    )
}