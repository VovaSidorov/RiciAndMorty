import React from 'react';
import "./style.css";
import PaginationElement from "../PaginationElement";

function Pagination(props) {
    const {page, info}=props;

    return(
           <nav className="Pagination_Nav">
               <ul >
                   <PaginationElement linkText={info.prev} linkName="Prev" link={+page-1}/>
                   <li>{page}</li>
                   <PaginationElement linkText={info.next} linkName="Next" link={+page+1}/>
               </ul>
           </nav>
    )
}

export default Pagination;



