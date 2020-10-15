class UserController{

    constructor(form,inputs,table){
        this.form = form;
        this.inputs = inputs;
        this.table = table;
        this.onSubmit();
        this.onChangePhoto();
        this.onSubmitEdit();
    
    }
    onSubmitEdit(){
        let btnCancel = document.querySelector("#btn-edit-cancel");
        btnCancel.addEventListener("click", e =>{
            document.querySelector("#box-user-create").style.display="block";  
            document.querySelector("#box-user-edit").style.display="none";
        })

        let formEdit = document.querySelector("#form-editar-usuarios");
        let inputsEdit = formEdit.querySelectorAll("[name]");
        formEdit.addEventListener("submit",e=>{
            e.preventDefault();
            let user = this.getValues(inputsEdit);  
            console.log(user);
            let linhaUsuario = formEdit.querySelector("[name=linhaTabela]").value
            let tr = this.table.children[linhaUsuario];
            this.atualizarTabela(tr,user);
            this.resetForm(formEdit);
        })
    }

    atualizarTabela(tr,user){
        this.adicionarConteudoTR(tr,user);
        this.adicionarClickEdit(tr,user);
        this.adicionarClickDelete(tr);
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
            let user = this.getValues(this.inputs);
            this.addLine(user);
            this.resetForm(this.form);
            this.atualizaDisplay(user);
        })
    }  

    atualizaDisplay(user){
        this.qtdUsuarios = parseInt(this.qtdUsuarios)+1;
        if(user.admin){
            this.qtdAdmins = parseInt(this.qtdAdmins) +1;
        }
    }

    resetForm(form){
        form.reset();
        form.querySelector("[type=file]").removeAttribute("src")
    }
    addLine(user){
        let tr = document.createElement("tr");
        this.adicionarConteudoTR(tr,user);
        this.adicionarClickEdit(tr,user);
        this.adicionarClickDelete(tr);
        this.table.appendChild(tr);
    }
    adicionarClickDelete(tr){
        tr.querySelector(".btn-delete").addEventListener("click",e =>{
            if( confirm("Deseja realmente excluir?") ){
                tr.remove();
            }
        });
        //atualizarContador....
    }
    adicionarClickEdit(tr,user){
        tr.querySelector(".btn-edit").addEventListener("click", e => {
            let form = document.querySelector("#form-editar-usuarios")
            let atributo;
            //percorrendo atributos do usuario
            for(atributo in user){
                let input = form.querySelector(`[name=${atributo}]`);
                if(input.type=="radio"){
                    let inputGenero = form.querySelector(`[name=${atributo}][value=${user[atributo]}]`);
                    inputGenero.checked=true;
                    console.log(inputGenero);
                }else if(input.type=="checkbox"){
                    input.checked=user[atributo];
                }else if(input.type=="file"){

                }else{
                
                    input.value = user[atributo];
                }
            }
            let inputLinha = form.querySelector("[name=linhaTabela]")
            //sectionRowIndex -> retorna a posição do <tr> na tabela
            inputLinha.value = tr.sectionRowIndex;
            //1 º REMOVER O FORMULARIO DE CADASTRO
            document.querySelector("#box-user-create").style.display = "none"
            document.querySelector("#box-user-edit").style.display="block";
            //2º MOSTRAR O FORMULARIO DE EDIT
        })
    }
    adicionarConteudoTR(tr,user){
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
    }

    //retorna um usuário
    getValues(inputs){ 
        let user={}
        inputs.forEach( (input) => {
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