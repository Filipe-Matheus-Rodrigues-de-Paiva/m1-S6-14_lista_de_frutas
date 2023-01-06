    let buttonBanana = document.createElement('div');
    buttonBanana.setAttribute('class','button-banana');
        let button_1 = document.createElement('button');
        button_1.type = 'submit';
        button_1.innerHTML = 'Banana';
        buttonBanana.appendChild(button_1);

    let buttonMorango = document.createElement('div');
    buttonMorango.setAttribute('class','button-morango');
        let button_2 = document.createElement('button');
        button_2.type = 'submit';
        button_2.innerHTML = 'Morango';
        buttonMorango.appendChild(button_2);
    
    let buttonGoiaba = document.createElement('div');
    buttonGoiaba.setAttribute('class','button-goiaba');
        let button_3 = document.createElement('button');
        button_3.type = 'submit';
        button_3.innerHTML = 'Goiaba';
        buttonGoiaba.appendChild(button_3);

    let buttonPessego = document.createElement('div');
    buttonPessego.setAttribute('class','button-pessego');
        let button_4 = document.createElement('button');
        button_4.type = 'submit';
        button_4.innerHTML = 'Pêssego';
        buttonPessego.appendChild(button_4);

    let container = document.querySelector('.container-buttons');
    container.appendChild(buttonBanana);
    container.appendChild(buttonMorango);
    container.appendChild(buttonGoiaba);
    container.appendChild(buttonPessego);