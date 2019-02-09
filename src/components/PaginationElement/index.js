import React from 'react';
import {Link} from "react-router-dom";

function PaginationElement(props) {

    const {linkName,linkText,link} = props;

      if (linkText) {
          return (
              <li><Link to={`/page/${link}`}>{linkName}</Link></li>
          )
      }
      return "";
}

export default PaginationElement;



