import React from 'react'
import "./clients.css"



export const Clients = () => {
    const Clients = [
        {
            id: "user1",
            description: "I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!",
            img: "Ellipse 11.png",
            imgAlt: "fhotouser1",
            name: "Denny Hilguston",
            address: "@denny.hill",  
        },
        {
            id: "user2",
            description: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
            img: "Ellipse 11 (1).png",
            imgAlt: "fhotouser2",
            name: "Vani Pandey",
            address: "@vani.pandey",  
        },
        {
            id: "user3",
            description: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
            img: "Ellipse 11 (3).png",
            imgAlt: "fhotouser3",
            name: "milly Singh",
            address: "@milly.singh",  
        }
    ]
  return (
<div className="sectionClients">
   <section className="clients">
    <div className="clients-box" >
    <h3 className="clients-header">What our clients say</h3>
    <p className="clients-text">See what our customer say about us. It really matter for us. How good or bad we will make ir for evaluation to make EhyalLive better.</p>
    <ul className="clients-user">
    {Clients.map((user) => {
        return  <li className="clients-user__item" key={user.name}>
            <span className="user-text">starstarstar</span>
            <p className="user-description">{user.description}</p>
            <div className="user-person">
                <img src={`/clients/${user.img}`} alt={user.imgAlt}/>
                <div className="person-name">   
                    <p className="person-name__foto">{user.name}</p>
                    <address className="parson-name__address">{user.address}</address>
                </div>
            </div>
        </li>
        
        })}
    </ul>
    </div>
    </section>
</div>
  )
}





