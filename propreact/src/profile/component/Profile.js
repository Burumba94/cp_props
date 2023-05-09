import React from "react";
const Profile = props => {
    console.log('props:',props)
    return<>

        <h1> Nom et Prenom: {props.FullName} </h1>
        <h1> Biographie: {props.Bio} </h1>
        <h1> Profession: {props.Profession} </h1>
        </>
    
}
export default Profile;