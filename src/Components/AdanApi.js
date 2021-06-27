
import React, { Component } from 'react'
import Sound from 'react-sound'
import './AdanApi.css'
import axios from 'axios';
import Quran from "../Components/Quran.mp3"

 class AdanApi extends Component {

    

    state = {
        adan : [],
        city : localStorage.getItem('myCite') ? localStorage.getItem('myCite').replace(' ' , '-') : 'lyon',
        timer : [],
        play : true
    }


    handleChange = (e) => {

         
        return this.setState({
           city : [e.target.value]
        })
   

       

       
   }

   haldelClikc = (e) => {

      
       this.setState({
           city : localStorage.getItem('myCite') ? localStorage.getItem('myCite').replace(' ' , '-') : this.state.city,
       })

       
    

       let json = this.state.city;
        let obectJson = `{city : ${json}}`
    //    let obj = JSON.stringify(json);
    //    let jsObje = JSON.parse(`city : ${json}`)
       
    //   localStorage.setItem('city', JSON.stringify(json));
      localStorage.setItem('myCite' , this.state.city);

       
       
   }

  
   



    componentDidMount(){

    
          axios.get(`https://api.pray.zone/v2/times/today.json?city=${ localStorage.getItem('myCite') ?  localStorage.getItem('myCite').replace(' ', '-') : this.state.city }&school=8`)
        .then(resp =>{
            console.log(resp.data.results.datetime)

            this.setState({
                adan : resp.data.results.datetime
            })
      
        





            console.log( new Date().toLocaleTimeString(new Date().getMinutes() - 10));
            
        const interval = setInterval(() => {

            let timer =  new Date();
        
            this.setState({
                timer : []
            })

            

        }, 1000)
        

           
           

        })
    }

  

    

    render() {



        const PlaySound = (

            hanleSongLoading,
            hanleSongPlay,
            hanleSongFinishedPlaying


        ) => {

       
        }

       



        return (
            <div className='container'>
                    <form>
                        <input type="text" onChange={this.handleChange} placeholder="Search Your City"/>
                        <button type="onSubmit" onClick={this.haldelClikc}> Save</button>
                    </form>
                    <div className="container-timer">
                   
                   {localStorage.getItem('myCite') ? (
                    <span className="my-city">{localStorage.getItem('myCite').toUpperCase()}</span>
                   ): <span className="my-city">LYON</span>
                   }
                    
                        <div className="timer">    
                       
                                <div>
                                 
                                {  new Date().toLocaleTimeString()}

                                </div>
                        </div>
                    </div>

                {this.state.adan.map((salat, index) =>(
                    <div className='container-adan' key={index}>
                        <div className= {  new Date().toLocaleTimeString()  < salat.times.Fajr &&  new Date().toLocaleTimeString() < salat.times.Isha ? 'adan start' : 'adan'}>
                             <h2>Fajr</h2>
                             <span> {salat.times.Fajr}
                             </span>
                             <p>
                             +20
                             </p>
                             

                        </div>
                        <div className= {  new Date().toLocaleTimeString()  < salat.times.Dhuhr &&  new Date().toLocaleTimeString()  > salat.times.Fajr ? 'adan start' : 'adan'}>
                             <h2>Dhuhr</h2>
                             <span> {salat.times.Dhuhr}
                             </span>
                             <p>
                             +10
                             </p>
                             

                        </div>
                        
                        <div className= {  new Date().toLocaleTimeString()  < salat.times.Asr &&  new Date().toLocaleTimeString()  > salat.times.Dhuhr ? 'adan start' : 'adan'}>
                             <h2>Asr</h2>
                             <span > {salat.times.Asr}</span>
                             <p>+10</p>
                             
                        </div>
                        <div className= {  new Date().toLocaleTimeString()  < salat.times.Maghrib && new Date().toLocaleTimeString()  > salat.times.Asr ? 'adan start' : 'adan'}>
                             <h2>Maghrib</h2>
                             <span> {salat.times.Maghrib}</span>
                             <p>+5</p>
                        </div>
                        <div className= {  new Date().toLocaleTimeString()  < salat.times.Isha &&  new Date().toLocaleTimeString()  > salat.times.Maghrib  ? 'adan start' : 'adan'} >
                             <h2>Isha</h2>
                             <span > {salat.times.Isha}</span>
                             <p>0</p>
                    
                             
                             
                            <Sound 
                                url={Quran}
                                playStatus={Sound.status.PLAYING}
                                playFromPosition={300}
                                onLoading={this.hanleSongLoading}
                                onPlaying={this.hanleSongPlay}
                                onFinishedPlaying={this.hanleSongFinishedPlaying}
                            />

                        </div>
                    </div>
                ))}
            </div>
        )
    }
    

}

export default AdanApi;
