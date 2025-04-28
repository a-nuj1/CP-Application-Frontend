import React, { useEffect } from 'react';
import "../../App.css"
import Section1 from './HomeSections/Section1'
import Section2 from './HomeSections/Section2'
import Section4 from './HomeSections/Section4'
import Section5 from './HomeSections/Section5'

function Home() {
  return (
    <>
      <Section1/>
      <Section2/>
      <Section4/>
      <Section5/>
    </>
  );
}

export default Home;