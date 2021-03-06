import {ROOT_URL} from '../config';
import Auth from '../services/Auth'; 
import fetch from 'isomorphic-fetch';


export default class API {
    static getTodos(){
        return fetch(`${ROOT_URL}/todos`,{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${Auth.getToken()}`                
            }
        });
    }

    static deleteTodo(id){
        return fetch(`${ROOT_URL}/todos/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${Auth.getToken()}`                
            }
        });
    }

    static addTodo(description){
        return fetch(`${ROOT_URL}/todos`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${Auth.getToken()}`                
            },
            body:JSON.stringify({
                description
            })
        });
    }
}