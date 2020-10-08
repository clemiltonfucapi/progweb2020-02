

const input = document.querySelector('input[type="file"]')


input.addEventListener('change',e =>{
     console.log(input.files)
     const reader = new FileReader();
        reader.onload = function(){
            let img = new Image();
            img.src = reader.result;
            document.body.appendChild(img)
        }
    reader.readAsDataURL(input.files[0])

})