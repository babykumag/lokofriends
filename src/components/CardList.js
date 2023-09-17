import React from "react";
import Card from '../components/Card';

// First, ginawa nating parameter yung nasa lokofriends
// Next, nagdeclare ng variable name cardComponent wherein niloop natin
// ang laman ng lokofriends at naglagay tayo ng parameter name na listahan
// at pinasa natin sa i ang count sa listahan
// Lastly, nireturn natin using the array data parameters ng id,name,email at
// tinawag natin sa pinakareturn ang variable na cardComponent
// Other Updates, added key parameter with i element
const CardList = ({lokofriends}) => {
    return(
        <div>
            {lokofriends.map((listahan,i) => {
    return (
        <Card 
            key={i} 
            id={lokofriends[i].id} 
            name={lokofriends[i].name} 
            email={lokofriends[i].email}
        />
            );
    })}
        </div>
    );
}

// const CardList = ({lokofriends}) => {
//     const cardComponent = lokofriends.map((listahan,i) => {
//     return <Card 
//         key={i} 
//         id={lokofriends[i].id} 
//         name={lokofriends[i].name} 
//         email={lokofriends[i].email}
//         />
//     })
//     return(
//         <div>
//             {cardComponent}
//         </div>
//     );
// }


export default CardList;