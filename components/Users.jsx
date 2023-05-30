"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";


function Users({users}) {
    const router = useRouter()
    return(
        <ul className="list-group">
        {
         users.map((user)=>(
           <li key={user.id}
           className="list-group-item d-flex justify-content-between aling-items-center list-group-item-action"
           onClick={() => {
          router.push(`/users/${user.id}`)
           }}
           >
             <div>
               <h3>{user.first_name} {user.last_name}</h3>
               <p>{user.email}</p>
             </div>
             <picture>
               <img src={user.avatar} alt={user.email}
               style={{borderRadius:"50%"}} />
             </picture>
           </li>
         ))
        } 
       </ul>
    )
  }
  
  export default Users