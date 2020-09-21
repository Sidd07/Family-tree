import React from 'react';
import { Link } from 'react-router-dom';

const ListBox = (props) => {
    let familyList = props.list;

    return (
        < div className="row offset-md-3 " >
            {familyList.map((value, index) => {
                return (
                    <div key={index} className="col-md-6 bg-success text-white m-2 ">
                        <Link to={`/family/${value.id}`} className="text-white" >
                            <label className="pointer">Family Name: <span><b>{value.familyName}</b> </span>  </label><br />
                            <label className="pointer"> Total Family Members: <span> {value.totalMembers} </span></label>
                        </Link>
                    </div>)
            })}
        </div >
    );
}

export default ListBox