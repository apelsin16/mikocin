// document.querySelectorAll('.currency').forEach(node => {
//     node.textContent = new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'}).format(node.textContent);
// });

(()=> {

   
    const button = document.querySelector('.order-button');
    const form = document.querySelector('.header__form');
    const info = document.querySelector('.header__info');


    const toggleForm = () => {
        if (form.style.display !== 'block') {
            form.style.opacity = '1';
            
            button.textContent = 'Подумать';
            info.style.opacity = '0';
            
            setTimeout(()=> {
                form.style.display = 'block';
                info.style.display = 'none';
            }, 1000)

        } else {
            form.style.opacity = '0';
            button.textContent = 'Заказать';
            info.style.opacity = '1';
            setTimeout(()=> {
                form.style.display = 'none';
                info.style.display = 'block';

            },1000)
        }
    }

    button.addEventListener('click', toggleForm );
    
    window.addEventListener('resize', () => {
        if ( document.body.clientWidth >='1200' ) {
            if (form.style.display == 'block' && info.style.display == 'block' ) {
                return;
            } else {
                window.location = window.location.href;
            }
        }
    });
      

})();

