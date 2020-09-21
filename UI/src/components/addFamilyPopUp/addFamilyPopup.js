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

const AddFamilyPopUp = (props) => {
    return (
        <div className='container-fluid'>
            <Modal isOpen={props.value.modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal">
                <div className='container-fluid'>

                    <div className='row mb-3 mt-2'>
                        <div className="col-md-11">
                            <h6 className="text-primary">Add Family</h6>
                        </div>
                        <div className="col-md-1">
                            <i className="fas fa-times pointer" onClick={props.closeModal}></i>
                        </div>
                    </div>

                </div>


                <div className='row'>
                    <div className='col-md-11 pl-4'>
                        <form onSubmit={props.handleSubmit}>
                            <div className="form-group">
                                <label className="text-muted">First Name</label>
                                <input type="text"
                                    className="form-control" name="firstName" id="" aria-describedby="helpId" placeholder="" value={props.value.firstName} onChange={e => props.handlechange(e)} required />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Family Name</label>
                                <input type="text"
                                    className="form-control" name="familyName" id="" aria-describedby="helpId" placeholder="" value={props.value.familyName} onChange={e => props.handlechange(e)} required />
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label text-muted" htmlFor="inlineRadio1">Gender</label>
                                <input className="form-check-input ml-2" type="radio" name="gender" id="inlineRadio1" value="male" onChange={e => props.handlechange(e)} required />
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={e => props.handlechange(e)} required />
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <div className="mt-4 mb-4">
                                <button className="btn btn-primary" type="submit" > Add Family</button>
                            </div>
                        </form>

                    </div>

                </div>


            </Modal>
        </div >)

}

export default AddFamilyPopUp;