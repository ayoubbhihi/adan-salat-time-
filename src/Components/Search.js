import React , {Fragment, useState, useEffect}from 'react'
import './Search.css';

function Search() {

    const [dates , setDates] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");


    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => setDates(json))
            
    // }, [])
    // useEffect(()=>{
    //     fetch('https://api.pray.zone/v2/times/today.json?city=paris')
    //         .then(response => response.json())
    //         .then(json => setDates(json))
      
    // }, [])


    window.onload = () => {
       
       
       dates.results.map(date => {

            console.log(date)
       })
       
    }
    
    
     




    
   


    // const handelSearchTerm = (e) => {
    //     let value = e.target.value

    //     value.length > 2 &&  setSearchTerm(value);

    // }



    return (
        <Fragment>
            <div className="search-container">
                <input type="text"className="search-input" name="search-name-input"  placeholder="Search Here" />
            </div>
            
            <div className="result-container">
              
                    {/* {dates.filter(val => {
                        return val.title.includes(searchTerm.toLowerCase())
                    }).map(val =>(
                        <div className="result" key={val.id}>   {val.title  }     </div>
                    ))} */}
                    

                

                   

                    {/* {dates.map(date =>{
                        <div >{date}</div>
                    })} */}

                    {/* {dates.map(data =>{
                        <div>
                            {data}
                        </div>
                    })} */}

                    {/* {dates.map(date => (
                        <div>
                            {date.results}
                        </div>
                    ))} */}

                   
                    
                    
          
            </div>
        </Fragment>
    )
}

export default Search
