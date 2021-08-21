const submitButton = document.getElementById('submit');
const submit = ()=>{
    const username = document.getElementById('name');
    const post = document.getElementById('post');

    if(post != "" && username != ""){
        const container = document.getElementById('content');
        const object = document.createElement('div')

        object.setAttribute('class','items');
        const uname = document.createElement('p');
        uname.setAttribute('class','post_name');
        const pass = document.createElement('p');
        pass.setAttribute('class','post_data');
        container.appendChild(object);

            

    }
};
submitButton.addEventListener('click',submit);