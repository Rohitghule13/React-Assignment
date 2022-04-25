import {React,useState,useEffect} from 'react'
import CollegeTable from './CollegeTable.jsx';


export default function CollegesSearch() {
    const [colleges,setColleges] = useState([]);
    const [searchCollege,setSearch] = useState("");
  
    const searchedColleges =async (e)=>{
        const response = await fetch(`http://universities.hipolabs.com/search?name=${e}`);
        console.log(response); 
        const data = await response.json()
        if(response.status===200){
        setColleges(data)}
    }
    const searchHandle = (e)=>{
        console.log(`im in searchhandle with ${e}`)
        setSearch(e);
        searchedColleges(e);
    }  
    console.log("im checking colleges");
    console.log(colleges)
  return (
      <>
      <input id="input" type="text" placeholder='...Search'/>
      <button onClick={(e)=>{
          const val = document.getElementById('input');
          console.log(val.value)
          searchHandle(val.value);
      }}>SRC</button>
      <CollegeTable Colleges = {colleges}/>
    <div>CollegesSearch</div>

    </>
  )
}
