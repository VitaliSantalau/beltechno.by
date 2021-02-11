import React from "react"
import Header from "../components/header"
import SEO from "../components/SEO"


export default function Home() {
  return (
    <>
      <SEO 
        title="Главная"
        pathname="/"  
      />
      <main>
        <Header />

      </main>
    </>
  )
}
