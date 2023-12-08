'use client'
import {Button} from "@mui/material";

export  function LocationDisplayer () {
  return <Button 
      color='inherit'
      onClick={async ()=>{
        const response = await fetch('/api/test');
        const {city, country, countryRegion} = await response.json();
        console.log(city, country, countryRegion)
      }}
    >show my location</Button>
}