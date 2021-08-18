import React from 'react'
import { Fragment } from 'react'
import { Carrier } from '../Component/Carrier'
import { Colleague } from '../Component/Colleague'
import { Contact } from '../Component/contact'
import { HeroBlock } from '../Component/Hero'
import { Footer } from '../Component/UI/Footer'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Fragment>
      <HeroBlock />
      <Carrier />
      <Colleague />
      <Contact />
      <Footer />
    </Fragment>
   )

 }

export default HomePage