import * as actionTypes from './actions';
import data from '../mockData/familyList'
import data1 from '../mockData/family';

const initialState = {
       familyData: data1
};

const reducer = (state = initialState, action) => {
    let families = []
    families = [...state.familyData]

    console.log("families inside reducer", families)
    switch (action.type) {
        case actionTypes.ADD_FAMILY:
            families.push(action.familyData[0])
            console.log("families inside reducer2", families)
            return {
                ...state,
                familyData: families
             }      
        default:
            return state;
            }
    };

    export default reducer;