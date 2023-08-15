import { useState } from "react"
import ArticleList from "./Components/ArticleList/ArticleList"
import { Header } from "./Components/Header/Header"
import { Form } from "./Components/Form/Form";

function App() {

  const [user, setUser] = useState();
  const hasUser = Boolean(user)

  console.log(hasUser);

  return (
    <div className="h-screen">
      <Header user={user}/>
      
      {hasUser && <ArticleList/>}
      {hasUser || <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App
