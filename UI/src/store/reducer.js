import * as actionTypes from './actions';
import data from '../mockData/familyList'
import data1 from '../mockData/family';
import axios from "axios";

const initialState = {
    familyData: data1
};

const host = "https://familytreeforsimform.herokuapp.com";
const addFamily = (state,families,action) => {
    
    axios.post(`${host}/v1/family_tree`,action)
            .then(response => {
                families.push(response.data.data)                         
                return {
                    ...state,
                    familyData:[...families]
                }
            })
            .catch(error => {
                console.log("im in error", error)
            });
             
           
            
};

const reducer = (state = initialState, action) => {
    let families = []
    families = [...initialState.familyData]

    console.log("families inside reducer", families)
   
    
    switch (action.type) {
        case actionTypes.ADD_FAMILY: return addFamily(state,families,action.familyData[0]);
           
           
        default:
            return state;
    }
};


export default reducer;