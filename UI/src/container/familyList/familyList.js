import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListBox from '../../components/listBox/listBox';
import Modal from 'react-modal';
import * as actionTypes from '../../store/actions';
import AddFamilyPopUp from '../../components/addFamilyPopUp/addFamilyPopup';



Modal.setAppElement('#root');

class FamilyList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    state = {
        modalIsOpen: false,
        familyName: " ",
        firstName: " ",
        gender: " "

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
    handleSubmit(event) {
        event.preventDefault();
        this.openModal();
        let obj = [{
            "id": (this.props.familyData.length+1).toString(),
            "familyName": this.state.familyName,
            "name": this.state.firstName,
            "gender": this.state.gender,
            "totalMembers": 1,
            "family":[]
        }]

        this.setState({
            modalIsOpen: false,
            familyName: " ",
            firstName: " ",
            gender: " ",
            
        })
        this.props.onFamilyAdded(obj);
    }

    render() {
        return (
            <div className="App">
                <div className="m-3">
                    <h3 >Welcome To FamilyTree App
                        <i className="float-right pointer fas fa-user-plus p-3" onClick={this.openModal}></i>
                        <i className="float-right fas fa-user-minus p-3 "></i></h3>
                </div>
                <div className="container">
                    <ListBox list={this.props.familyData} />
                </div>
                {this.state.modalIsOpen ?
                    <AddFamilyPopUp closeModal={this.openModal} 
                    value={this.state} 
                    handlechange={e => this.handleChange(e)} 
                    handleSubmit={this.handleSubmit}></AddFamilyPopUp> : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        familyData: state.familyData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFamilyAdded: (familyData) => dispatch({ type: actionTypes.ADD_FAMILY, familyData: familyData })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FamilyList);
