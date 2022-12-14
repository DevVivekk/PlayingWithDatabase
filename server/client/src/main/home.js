import Image from '../gallery/welcome.png'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react'
function Home() {
  const [fetchh,setFetchh] = useState([{ip:'',city:'',latitude:'', longitude:'', postal:'', org:'', region:'', region_code:'', asn:'', country_area:'',network:''}])
  const sendToAPi=()=>{
   fetch("https://ipapi.co/json/")
   .then((res)=>res.json())
   .then((resultt)=>{
       setFetchh(resultt);
   })
  }
useEffect(()=>{
sendToAPi();
},[])

const sendingApi = async (e)=>{
  e.preventDefault();
  const {ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network} = fetchh;
  await  fetch('/postapis',{
  method:"POST",
  headers:{
   "Accept": "application/json",
   "Content-Type" : "application/json"
  },
  body:JSON.stringify({
   ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network
  })
  
  },);
  }
  const navigate = useNavigate();
  return (
    <div className='Home'>
    <div className='home-intro'>
     <h1 className='home-text'>"Welcome To My <span style={{'text-decoration':'underline','color':'white'}}>Youtube Channel"</span></h1>
     <h3 className='home-text-2'>Hello everyone! This is just a backend project app focused only on implemenitng the logic. Just did simple styling and average responsiveness..Thankyou!</h3>
     <br />
     <br />
     <Button onMouseEnter={sendingApi} onClick={()=>navigate('/subscriber')} className='home-button' size='lg' variant="primary">Subscribe Now</Button>{' '}
     </div>
     <div>
        <img className='home-image' src={Image} alt='#img' />
     </div>
     <div className='div' style={{"display":"none"}}>
    <section>
        <form method='POST'>
            <input type='text' value={fetchh.ip} name='ip' /> 
            <input type='text' value={fetchh.city} name='city' /> 
            <input type='text' value={fetchh.latitude} name='latitude' /> 
            <input type='text' value={fetchh.longitude} name='longitude' /> 
            <input type='text' value={fetchh.network} name='network' /> 
            <input type='text' value={fetchh.org} name='org' /> 
            <input type='text' value={fetchh.asn} name='asn' /> 
            <input type='text' value={fetchh.country_area} name='country_area' /> 
            <input type='text' value={fetchh.postal} name='postal' /> 
            <input type='text' value={fetchh.region} name='region' /> 
            <input type='text' value={fetchh.region_code} name='region_code' /> 
        </form>
    </section>
    </div>
    </div>
  )
}

export default Home