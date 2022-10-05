
import { Header } from './components/header/Header';
import { Hero } from './components/hero/hero';
import { Content } from './components/content/content';
import { ListItem } from './components/listItem/ListItem';
import { Clients } from './components/clients/clients';
import { Footer } from './components/footer/footer';
import { useState } from 'react';



function App() {
    

    const [Cards, addNewCard] = useState (JSON.parse(localStorage.getItem("Cards"))||[])
   
    const test = (values) => {
    values.date=Date.parse(new Date)
    localStorage.setItem("Cards", JSON.stringify([...Cards, values]));
    addNewCard(JSON.parse(localStorage.getItem("Cards"))||[])
    setEmpyCards (false)
    }

    const [empyCards, setEmpyCards] = useState (()=> {if (Cards=="") {return true } else {return false}})

    const [testUser, setTestUser] = useState (()=> {if (localStorage.getItem("User")==null) {return false} else {return true}})
 
    
    const handleSortNew =(e) => {
       let newCards = []
        switch (e.target.value) {
            case 'New first':
              newCards = Cards.sort((a, b) => (a.date > b.date) ? 1 : -1)
                break;
            case 'Last first':
              newCards = Cards.sort((a, b) => (a.date < b.date) ? 1 : -1)
                break;
            default:
                break;
        }
                localStorage.setItem("Cards", JSON.stringify(newCards));
                addNewCard(JSON.parse(localStorage.getItem("Cards"))||[])
    }
  return (
    <div className="App">
      <Header setTestUser={setTestUser}/>
      <Hero test={test} testUser={testUser}/>
      <Content/>
      <ListItem  empyCards={empyCards}  cards={Cards} handleSortNew={handleSortNew}/>
      <Clients clients = {Clients}/>
      <Footer />
    </div>
  );
}

export default App;
