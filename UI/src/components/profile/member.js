import React from 'react';
import styled from 'styled-components';
import { MdPerson } from "react-icons/md";

const StyledWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledAvatar = styled.div`
  width:80px;
  border: 1px solid #237A8A;
  height:80px;
  border-radius:50%;
  background:#009595;
 color:#ffffff
`

const Member = (member) => {

  const defaultAvatar = <MdPerson style={{ fontSize: 65 }} />;

  const { name, avatar, gender, relation } = member;
  return (
    <StyledWrapper>
      <div className="m-3">
        <StyledAvatar>{avatar ? <img src={avatar} /> : defaultAvatar} </StyledAvatar>
        <div clanssName="col-md-3">
          <br /><span className="pl-2">{name} </span> <i className="fas fa-user-plus pointer text-success float-right pl-2"   data-toggle="tooltip" data-placement="bottom" title="Add member to familyss"  onClick={member.openpopup}></i>   {/* <br/> <span> {gender}</span>  */}
          <br />
          <span>{relation}</span>
        </div>

      </div>
    </StyledWrapper>
  );
}

export default Member;