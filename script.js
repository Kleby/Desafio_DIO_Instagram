var aux = 0;

function preload(){
    imgs=Array('/img/cel1.png', '/img/cel2.png', '/img/cel3.png')
    img_qtd= imgs.length;
    for( i=0 ; i<img_qtd ; i++){
        var carregar = new Image();
        carregar.src=imgs[i];
    }
}

function iniciar(){
    preload();
    max=2;
    min=1;
    alterar('/img/cel1.png');
    tmr = setInterval(proxima, 3000);
}

function proxima(){
    aux++;
    if(aux > max){
        aux = min;
    }
    
    alterar('/img/cel'+aux+'.png')

}



function alterar(new_img){
    document.getElementById('alterar-img').style.backgroundImage='URL('+new_img+')';
}

