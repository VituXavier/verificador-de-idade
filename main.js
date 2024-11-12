function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO]Verifique os dados e tente novamente!');
    }else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fSex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-crianca-macho.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-macho.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-macho.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-macho.png')
            }
        } else if (fSex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-crianca-femea.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-femea.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-femea.png')
            }else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-femea.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }

}
