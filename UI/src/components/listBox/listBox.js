import React from 'react';
import {Link} from 'react-router-dom';

const ListBox = (props) => {
    let familyList = props.list;
    console.log("family list",familyList)
    return (
        < div className="row" >
            {familyList.map((value, index) => {
                return (
                   <Link to={`/family/${value.id}`}> <div className="col bg-success text-white m-5" key={index} >
                   <label>Family Name: <span>{value.familyName} </span>  </label>
                   <label> Total Family Members: <span> {value.totalMembers} </span></label>
                </div>
                </Link>)

            })}
        </div >
    );
}

export default ListBox