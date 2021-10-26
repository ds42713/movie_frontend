import react,{useState,useEffect} from 'react';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import axios from 'axios';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';



function App() {
  
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [url,setUrl] = useState("http://localhost:8000/api/movie-viewsets/")
  const [loading, setLoading] = useState(false)

  const getURL = ()=>{
    setLoading(true)
    axios.get(url).then((response)=>{
      setMovieData(response.data , setLoading(false))
      console.log(response.data)
    })
  } 

  useEffect(()=>{
    getURL()
  },[url])

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setUrl(`http://localhost:8000/api/movie-viewsets/?search=${searchQuery}`)
  }


  const showLoading = () => (
    loading ? <h2 className="font-bold">Loading...</h2> : ''
  )


  return (
    <div>
      <AppHeader handleChange={handleChange} searchQuery={searchQuery} handleSubmit={handleSubmit} />
      {showLoading()}
      <AppMain movieData={movieData} />
    </div>
  );
}

export default App;
