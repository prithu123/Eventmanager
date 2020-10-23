import {ADD_EVENT, DELETE_EVENT, GET_EVENTS} from './types'
import axios from 'axios'


export const getEvents = () => async dispatch => {
    try{
        
    const res= await axios.get('http://localhost:5000/events')

    dispatch ({
        type : GET_EVENTS,
        payload :res.data
    })}
    catch(e){
        console.log('error', e);        
    }
}

export const deleteEvents = (id) => async dispatch => {
    const res= await axios.delete (`http://localhost:5000/events/${id}`)

    dispatch( {
        type : DELETE_EVENT,
        payload :id
    })
}

export const addEvent = (event) =>async dispatch => {
    try{
        let data = JSON.stringify(event);
        const res= await axios.post('http://localhost:5000/events',data,{headers:{"Content-Type" : "application/json"}})

    dispatch( {
        type : ADD_EVENT,
        payload: res.data
    })
   }catch(e){
       console.log('error',e)
   }

}