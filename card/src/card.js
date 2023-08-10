import React from 'react';
import ReactDOM from 'react-dom/client';

const C=()=>{
    let a=[{
        image:"https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
        name:"Bala sir",
	    experience:10,
        link:"https://www.darshan.ac.in/faculty-profile/Prof-Arjun-Virjibhai-Bala"        
    },
    {
        image:"https://darshan.ac.in/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
        name:"Padyuman Sir",
	    experience:20,
        link:"https://www.darshan.ac.in/faculty-profile/Dr-Pradyumansinh-U-Jadeja"
    },
    {
        image:"data:image/jpeg;base64,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",
        name:"Gambhava sir",
	    experience:25,
        link:"https://www.darshan.ac.in/faculty-profile/Dr-Nilesh-Maganbhai-Gambhava"
    },
    {
        image:"https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
        name:"Gopi mam",
	    experience:20,
        link:"https://www.darshan.ac.in/faculty-profile/Dr-Gopi-Bhupendrabhai-Sanghani"       
    }];

    var details=a.map((detail)=>{
        return (
        <div class="container col-3 body2">
            <div class="card " style={{width: "18rem;"}}>
                <img src={detail.image} class="card-img-top" alt="..."/>
                <div class="card-body" >
                    <h5 class="card-title">{detail.name}</h5>
                    <p class="card-text ">{detail.experience}</p>
                    <a href={detail.link} class="btn btn-warning \">PROFILE</a>
                </div>
            </div>
        </div>
        )
    });
    
    return(<>
        {details}
    </>
    );
}

export default C