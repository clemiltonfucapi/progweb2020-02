import {UserController} from './controller/UserController.js';


let form = document.querySelector("#form-usuarios");
//Selecionando elementos que tem o atributo name
let inputs = document.querySelectorAll("#form-usuarios  [name]")
let tbody = document.querySelector("#table-body")

let controller = new UserController(form,inputs,tbody);