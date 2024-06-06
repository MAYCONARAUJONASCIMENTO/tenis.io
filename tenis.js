const roxo = document.querySelector('.roxo')
const preto = document.querySelector('.preto')
const fundo = document.querySelector('.fundo')
const azul = document.querySelector('.azul')
const amarelo = document.querySelector('.amarelo')
const tenispreto = document.querySelector('.tenispreto')
const tenisred = document.querySelector('.tenisred')
const pretot = document.querySelector('.pretot')
const tenisazul = document.querySelector('.tenisazul')
const tenisamarelo = document.querySelector('.tenisamarelo')
const azull = document.querySelector('.azull')
const amareloo = document.querySelector('.amareloo')


const trocarroxo = () => {
    tenisred.style.display = 'flex'
    tenispreto.style.display = 'none'
    tenisazul.style.display = 'none'
    tenisamarelo.style.display = 'none'
    fundo.style.background = '#5c0ee2'

}

const trocarpreto = () => {
    pretot.classList.add('pretot-animation')
    tenisred.style.display = 'none'
    tenisazul.style.display = 'none'
    tenisamarelo.style.display = 'none'
    tenispreto.style.display = 'flex'
    fundo.style.background = '#000000'
    tenisamarelo.style.display = 'none'
}
const trocarazul = () => {
    azull.classList.add('azull-animation')
    tenisazul.style.display = 'flex'
    tenispreto.style.display = 'none'
    tenisred.style.display = 'none'
    fundo.style.background = '#008ab0'
    tenisamarelo.style.display = 'none'
}
const trocaramarelo = () => {
    amareloo.classList.add('amareloo-animation')
    tenisamarelo.style.display = 'flex'
    tenisazul.style.display = 'none'
    tenispreto.style.display = 'none'
    tenisred.style.display = 'none'
    fundo.style.background = '#E9CE55'

}