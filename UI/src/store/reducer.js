import * as actionTypes from './actions';
import data from '../mockData/familyList'
import data1 from '../mockData/family';
import axios from "axios";

const initialState = {
    familyData: data1
};

const reducer = (state = initialState, action) => {
    let families = []
    families = [...state.familyData]

    console.log("families inside reducer", families)
    let host= "http://localhost:5123"
    const addFamily = (obj) => {
        console.log("object",obj)

        axios.post(`${host}/v1/family_tree`, obj.familyData[0])
            .then(response => {
                console.log("response", response)
                families.push(response.data)
                return [
                    ...state,
                    families]

            })
            .catch(error => {
                console.log("im in error")               
            });

    };
    switch (action.type) {
        case actionTypes.ADD_FAMILY: return addFamily(state, action.familyData[0])
        default:
            return state;
    }
};

export default reducer;