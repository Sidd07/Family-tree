import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: "fit-content",
        padding: '0px',
        overflow: 'hidden',
        border: '1px solid blue'

    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
};
const loadingStyle = {
    content: {
        top: '47%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '500px',
        padding: '0px',
        backgroundColor: 'rgba(0,0,0,0.1)',
        overflow: 'hidden',
        color: '#ffffff',
        textAlign: 'center'


    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    }

}

const AddUpdateNode = (props) => {
    return (
        <div className='container-fluid'>
            <Modal isOpen={props.value.modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal">
                <div className='container-fluid'>
                    <div className='row heading'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className="col-md-11">
                                    <p className="bold">Add Family</p>
                                </div>
                                <div className="col-md-1">
                                    <i className="fas fa-times" onClick={props.closeModal}></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-11 pl-4'>
                        <form onSubmit={(e)=>props.handleSubmit(props.member,e)}>
                        <div className="form-group">
                                <label>First Name</label>
                                <input type="text"
                                    className="form-control" name="name" id="" aria-describedby="helpId" placeholder="" value={props.value.name} onChange={e=>props.handlechange(e)} />
                            </div>
                            <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="relation">Relation</label>
                                <input className="form-check-input ml-2" type="radio" name="relation" id="inlineRadio1" value="male" onChange={e=>props.handlechange(e)}/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Father</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="relation" id="inlineRadio2" value="female" onChange={e=>props.handlechange(e)} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Mother</label>
                            </div>    
                            <br/>                     
                            <div className="form-check form-check-inline">
                            <label className="form-check-label" htmlFor="inlineRadio1">Gender</label>
                                <input className="form-check-input ml-2" type="radio" name="gender" id="inlineRadio1" value="male" onChange={e=>props.handlechange(e)}/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={e=>props.handlechange(e)} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <div className="mt-4 mb-4">
                                <button className="btn btn-primary" type="submit"> Add Member</button>
                            </div>
                        </form>

                    </div>

                </div>


            </Modal>
        </div >)

}

export default AddUpdateNode;