import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Modal from 'react-modal';
import TreeRecursive from './treeRecursive'


const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => `${props.level * 30}px`};
`

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
    }
    hasChildren(member) {
        return member.family && member.family.length;
    }
    render() {
        return (
            <div>
                {this.state.indiviualData && this.state.indiviualData.length > 0 ?
                        (<TreeRecursive members={this.state.indiviualData} />) : null
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
