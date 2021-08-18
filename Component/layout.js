import { Container, Grid } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Footer } from './UI/Footer'
import Header from './UI/header'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <Fragment>
        <Header />
        <Container maxWidth="xl" style={{marginTop:'150px'}}>
          <Grid container direction='column'>
            {props.children}
          </Grid>
        

        </Container>
    </Fragment>
   )

 }

export default Layout