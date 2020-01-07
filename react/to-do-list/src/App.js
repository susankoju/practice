import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

class App extends React.Component{

  constructor(){
    super()
    this.state= {
      page:"home"
    }
  }

  render(){
    
    return (
      <div>
        <Header heading="ToDo List Checker" setPage={this.setPage} page={this.state.page}/>
        <MainContent page={this.state.page.toLowerCase()}/>
        <Footer />
      </div>
    )
  }

  setPage = (pageTo) => {
    this.setState({
      page: pageTo
    });
  }
}


export default App