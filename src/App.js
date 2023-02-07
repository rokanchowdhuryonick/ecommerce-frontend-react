import './App.css';
import { useEffect, useState } from 'react';
import Mobile from './Mobile';
import Filters from './Filters';
const DOMAIN = "https://backend.ecommerce.rokanchowdhuryonick.com"; 

function App() {
  const [mobilesList, setMobilesList] = useState(null)
  const [filtersList, setFiltersList] = useState(null)
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  const [filterIDs, setFilterIDs] = useState([]);

  const handleFilterIDs = (filterID) =>{
    const currentSelectedFilter = [...filterIDs];
    const index = currentSelectedFilter.indexOf(filterID);
    if (index > -1) {
      currentSelectedFilter.splice(index, 1);
    } else {
      currentSelectedFilter.push(filterID);
    }
    
    console.log(currentSelectedFilter);
    setFilterIDs(currentSelectedFilter);
  }

  const loadFilters = async ()=>{
    setFilterLoading(true);
    const response =  await fetch(`${DOMAIN}/api/filters`);
    const datas = await response.json();
    setFiltersList(datas.data);
    // console.log(datas);
    setFilterLoading(false)
  }

  const loadData = async () =>{
    setLoading(true);
    let URL = `${DOMAIN}/api/mobiles`;
    if (filterIDs.length!==0) {
      URL+="?filterID="+filterIDs.join();
    }
    console.log(URL);
    const response =  await fetch(URL);
    const datas = await response.json();
    setMobilesList(datas.mobileData);
    // setFiltersList(datas.filterData);
    // console.log(datas);
    setLoading(false)
  }
  useEffect(()=>{
    loadFilters();
  },[])

  useEffect(()=>{
    
    loadData();
  },[filterIDs])

  // console.log("mobilesList: ", mobilesList);

  return (
    <div className="">
      <div className='header'>
        <h2 style={{color:'#72939c'}}>A Demo of Product Page by <a className='App-link' style={{textDecoration:'none'}} href='http://linkedin.com/in/rokanchowdhuryonick'>Rokan Chowdhury Onick</a> </h2>
      </div>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col-md-3' style={{borderRight:'1px dashed #333', minHeight:'300px'}}>
            <h4>Filters</h4><hr/>            
            <div>
              {filterLoading===false?<Filters filtersList={filtersList} handleFilterIDs={handleFilterIDs} />:<h6>Loading...</h6>}
            </div>
          </div>
          <div className='col-md-9'>
            <h4>Mobiles</h4><hr/>
            <div className='p-2'>
              {loading===false?<Mobile mobilesList={mobilesList}/>:<h6>Loading...</h6>}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
