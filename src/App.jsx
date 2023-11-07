import { useState } from "react"
import SearchCard from "./Components/SearchCard/SearchCard"
import './App.css';

const App = ()=> {
  
  const [searchValue, setSearchValue] = useState('')
  const [repos, setRepos] = useState([])
  const url = `https://api.github.com/search/repositories?q=${searchValue}`
  
  const fetchData = async () => {
    try {
      
      const response = await fetch(url);
      const data = await response.json();
      setRepos(data.items)
    } catch (error) {
      console.log("Error al traer datos:", error);
    }
  }
  
  return (
      <>
        <div className="img">
          <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" width="25%" />
        </div>
        <div className="img">
        <SearchCard
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          fetchData={fetchData}
          repos={repos}/>
        </div>
      </>
  )
}
export default App