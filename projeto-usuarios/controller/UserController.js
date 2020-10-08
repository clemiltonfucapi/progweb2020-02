class UserController{

    constructor(form,inputs,table){
        this.form = form;
        this.inputs = inputs;
        this.table = table;
        this.onSubmit();
        this.onChangePhoto();
    }
    onChangePhoto(){
        let inputFoto = this.form.querySelector("[type=file]");
        inputFoto.addEventListener('change',(event)=> {
            console.log(inputFoto.files[0]);
            let reader = new FileReader();
            reader.readAsDataURL(inputFoto.files[0]);
            reader.onload = function(){
                inputFoto.src = reader.result;
            }

        })
    }

    onSubmit(){
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            let user = this.getValues();
            this.addLine(user);
            this.resetForm();
            this.atualizaDisplay(user);
        })
    }  

    atualizaDisplay(user){
        this.qtdUsuarios = this.qtdUsuarios+1;
        if(user.admin){
            this.qtdAdmins = this.qtdAdmins +1;
        }
    }

    resetForm(){
        this.form.reset();
        this.form.querySelector("[type=file]").removeAttribute("src")
    }
    addLine(user){
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td> 
                <img src="${  user.foto!="" ? user.foto : 'dist/img/avatar.png'}" class="img-circle img-sm" alt="Imagem do Usuário">
            </td>  
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.admin}</td>
            <td>${ Utils.dateFormat(user.nascimento)}</td>
            <td>
                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat"  >Editar</button>
                <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
            </td>
            `
        this.table.appendChild(tr);
    }
    //retorna um usuário
    getValues(){ 
        let user={}
        this.inputs.forEach( (input) => {
            if(input.type =="radio" && !input.checked)
                return;
            if(input.type=="checkbox"){
                user[input.name] = input.checked;
                return;
            }
            if(input.type=="file"){
                user[input.name] = input.src;
                return;
            }
            user[input.name] = input.value;
        } )
        return new User(user.nome,user.genero,
                    user.nascimento,user.nacionalidade,
                    user.email,user.senha,
                    user.foto,user.admin);

    }
   
    get qtdUsuarios(){
        return document.querySelector("#qtd-usuarios").innerHTML;       
    }
    set qtdUsuarios(value){
        document.querySelector("#qtd-usuarios").innerHTML = value;
    }
    get qtdAdmins(){
        return document.querySelector("#qtd-admins").innerHTML;
    }
    set qtdAdmins(value){
        document.querySelector("#qtd-admins").innerHTML = value;
    }

}