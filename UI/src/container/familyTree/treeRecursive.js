import React, { Component } from 'react';
import styled from 'styled-components';
import Member from '../../components/profile/member';

import Modal from 'react-modal';
import AddUpdateNode from '../../components/addUpdateNode/addUpdateNode';

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
        this.openModal = this.openModal.bind(this);
    }
    state = {
        modalIsOpen: false,
        name: "",
        gender: ""
    }

    openModal = () => {
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
    handleSubmit(member, event) {
        event.preventDefault();
        console.log("im member of node", member)
        this.openModal();
        let obj = {
            "name": this.state.name,
            "gender": this.state.gender,
            "family": [],
            "error":""
        }

        this.setState({
            modalIsOpen: false,
            familyName: "",
            firstName: "",
            gender: " ",
        })
        console.log("length",member.family.length )
        if (member.family.length < 2) {
            member.family.push(obj)
        }else{
            this.setState({error:"max 2 nodes allowed"})
        }
       
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
                        <AddUpdateNode closeModal={this.openModal}
                            value={this.state}
                            member={member}
                            handlechange={e => this.handleChange(e)}
                            handleSubmit={this.handleSubmit}></AddUpdateNode> : null
                    }
                </div>
            })}
        </StyledWrapper>
    }
}