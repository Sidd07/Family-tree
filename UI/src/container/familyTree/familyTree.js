import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import '../main.scss';
import TreeRecursive from './treeRecursive'




class FamilyTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indiviualData: []
        }
    }
    componentDidMount() {
        let path = this.props.location.pathname.split('/')[2]        
        const data = this.props.familyData.filter(item => item.id == path)
        this.setState({ indiviualData: data })     
       
        if(data.length==0){
            this.props.history.push('/')
        }

    }
   
    render() {
        return (
            <div>
                {this.state.indiviualData && this.state.indiviualData.length > 0 ?
                    (
                        <div>
                            <div className="col-md-12 mt-2 mb-4 p-4 "><h4 className="float-left">Family Name: {this.state.indiviualData[0].familyName}</h4><button className="btn btn-primary float-right" onClick={e=>this.props.history.push('/')} >Save</button></div>
                            <div className="mt-3">
                            <TreeRecursive members={this.state.indiviualData} />
                            </div>
                        </div>) : null
                }
            </div>
        )

    }
}



const mapStateToProps = state => {
    return {
        familyData: state.familyData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFamilyAdded: (FamilyData) => dispatch({ type: actionTypes.ADD_FAMILY, FamilyData: FamilyData })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FamilyTree);
