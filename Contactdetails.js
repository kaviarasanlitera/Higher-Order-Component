import React from 'react';

function Contactdetails(){
    let contacts=[
                    {primaryid:12345,name:"kavi",place:"delhi", dob:190},
                    {primaryid:2345,name:"eswar",place:"chennai", dob:191},
                    {primaryid:345,name:"kotti",place:"delhi", dob:192},
                    {primaryid:2347,name:"sulochana",place:"delhi", dob:182},
                    {primaryid:45,name:"vela0",place:"delhi", dob:170},
                    {primaryid:78,name:"vela1",place:"delhi", dob:170},
                    {primaryid:75,name:"vela2",place:"delhi", dob:170},
                    {primaryid:55,name:"vela3",place:"delhi", dob:170},
                    {primaryid:46,name:"vela4",place:"delhi", dob:170},
                    {primaryid:35,name:"vela5",place:"delhi", dob:170},
                    {primaryid:99999,name:"thamo",place:"Meenor", dob:175},
                ]

return(
        <p>
            <div>
            <div style={{color:'red'}}>Displaying the array of objects using MAP</div>
            {contacts.map((contact)=>{
                return <h1 style={{color:'red'}}>{contact.name}</h1>
            })}
            </div>

            <div>
            Displaying the array of objects using SORT and MAP
            {contacts.filter((contactfilter)=>{
                    return contactfilter.place==="delhi" })
                    .sort((primaryid1,primaryid2)=>{return primaryid1.primaryid-primaryid2.primaryid})
                    .map((contact)=>{
                    return <h1 style={{color:'red'}}>{contact.primaryid}<br/>{contact.name}<br/>{contact.place}</h1>
            })}
            </div>

        </p>
)

}
export default Contactdetails;