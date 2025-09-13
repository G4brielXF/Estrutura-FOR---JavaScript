function calcular(){
    var num = document.getElementById('txtn')
    var sel = document.getElementById('txts')
    if (num.value.length == 0){
    alert('[ERRO] Digite o valor correto!')
    } else{
        //conversor de texto do inputNUMBER pra número
        var n = Number(num.value)
        sel.innerHTML = ' '
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            //criando valor pro item do select (php)
            item.value = `tab ${c}`
            //chamando um option e fazendo o cálculo
            item.text = `${n} x ${c} = ${n*c}`
            //mostrar os itens de um select
            sel.appendChild(item)
        }
    }
}