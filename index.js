const body = document.body;
const loading = document.querySelector('.loading')

body.onload = function(){
    loading.classList.replace('loading', 'loaded')
}