import React, { Component } from 'react';
import styled from 'styled-components';
import Member from '../../components/profile/member';

import Modal from 'react-modal';
import AddFamilyPopUp from '../../components/addFamilyPopUp/addFamilyPopup';

Modal.setAppElement('#root');
const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => `${props.level * 30}px`};
`

export default class TreeRecursive extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal=this.openModal.bind(this);
    }
    state = {
        modalIsOpen: false,
        familyName: " ",
        firstName: " ",
        gender: " "
    }

    openModal = () => {
        console.log("im in pop up")
        this.setState({ modalIsOpen: !this.state.modalIsOpen })
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState(
            {
                [name]: value
            }
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        this.openModal();
        let obj = [{
            "id": this.props.familyList.length + 1,
            "familyName": this.state.familyName,
            "firstName": this.state.firstName,
            "gender": this.state.gender,
            "totalMembers": 1,
            "family": []
        }]

        this.setState({
            modalIsOpen: false,
            familyName: " ",
            firstName: " ",
            gender: " ",

        })
        this.props.onFamilyAdded(obj);
    }


    hasChildren(member) {
        return member.family && member.family.length;
    }
    render() {
        const level = this.props.level || 0;
        return <StyledWrapper level={level}>
            {this.props.members.map((member, i) => {
                return <div key={`level-${level}-${i}`}>
                    <Member openpopup={this.openModal} {...member} />


                    {this.hasChildren(member) && <TreeRecursive members={member.family} level={level + 1} />}

                    {this.state.modalIsOpen ?
                        <AddFamilyPopUp closeModal={this.openModal}
                            value={this.state}
                            handlechange={e => this.handleChange(e)}
                            handleSubmit={this.handleSubmit}></AddFamilyPopUp> : null
                    }
                </div>
            })}
        </StyledWrapper>
    }
}