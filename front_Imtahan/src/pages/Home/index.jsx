import React from 'react'
import Welcome from '../../components/Welcome'
import Restaurant from '../../components/Restaurant'
import { Helmet } from 'react-helmet-async'
import LatestNews from '../../components/LatestNews'
import SpecialUp from '../../components/SpecialsSignUp'
import CustomersSay from '../../components/Customers'

function Home() {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Welcome></Welcome>
        <Restaurant></Restaurant>
        <CustomersSay></CustomersSay>
        <LatestNews></LatestNews>
        <SpecialUp></SpecialUp>
    </div>
  )
}

export default Home