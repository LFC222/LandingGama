const form = document.getElementById('form')

form .addEventListener('submit',(e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let converterData = JSON.stringify(data);

    localStorage.setItem('lead', converterData)

    let content = document.getElementById('content')

    let carregando = `<p>Carregando...</p>`
    let Pronto = `<p>Está Pronto!</p>`


    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = Pronto
    },1000)

})

