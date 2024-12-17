
const checkbox_bars = document.getElementById('checkbox-bars');
const home_page = document.getElementById('home-page');
const about_page = document.getElementById('about-page');
const portfolio_page = document.getElementById('portfolio-page');
const title_page = document.getElementById('title-page');
const checkbox_contact = document.getElementById('checkbox-contact');
const icon_not_animation = document.getElementById(`icon-not-animated`);
let icon = 1;
let index = -1;






/* BARRA DE OPÇÕES */

// animação das opções na barra de opções
checkbox_bars.addEventListener('change', function() {
    for (let i = 1; i < 4; i++)
    {    
        const option = document.getElementById(`option-${i}`);
        if (checkbox_bars.checked) 
        {
            setTimeout(function(){
                option.style.transform = `translate(-110px, ${65 * i}px)`;
                option.style.transitionDuration = `1s`;
                option.style.opacity = `1`;
            }, i * 80);
        }
        else
        {
            setTimeout(function(){
                option.style.transform = `translate(0px, 0px)`;
                option.style.opacity = `0`;
            }, i * 60);
        }
    } 
});

// seleção das páginas pelas opções
document.getElementById('option-1').addEventListener('click', function()
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);
    
    home_page.style.display = 'block';
    about_page.style.display = 'none';
    portfolio_page.style.display = 'none';

    title_page.style.transform = `translateY(0px)`;
    title_page.style.transitionDuration = `1s`;
});

document.getElementById('option-2').addEventListener('click', function()
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);

    home_page.style.display = 'none';
    about_page.style.display = 'block';
    portfolio_page.style.display = 'none';

    title_page.style.transform = `translateY(-45px)`;
    title_page.style.transitionDuration = `1s`;
});

document.getElementById('option-3').addEventListener('click', function()
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);

    home_page.style.display = 'none';
    about_page.style.display = 'none';
    portfolio_page.style.display = 'block';

    title_page.style.transform = `translateY(-90px)`;
    title_page.style.transitionDuration = `1s`;
});

// seleção das páginas pelos links
document.querySelectorAll('.portifolio-link').forEach(link => {
    link.addEventListener('click', function() {
        const event = new Event('change');
        checkbox_bars.checked = false;
        checkbox_bars.dispatchEvent(event);

        home_page.style.display = 'none';
        about_page.style.display = 'none';
        portfolio_page.style.display = 'block';

        title_page.style.transform = `translateY(-90px)`;
        title_page.style.transitionDuration = `1s`;
    });
});




/* ICONE DE CONTATOS */

// animação da aparição dos icones dos contatos no botão
function blink_contact() 
{
    if (!checkbox_contact.checked)
    {
        const contact = document.getElementById(`animation-opacity-icon-${icon}`);
        contact.style.opacity = `1`;
        contact.style.transitionDuration = `1s`;
        setTimeout(function() { contact.style.opacity = `0`; }, 2000);
    }

    else{
        icon_not_animation.style.opacity = `1`;
        icon_not_animation.style.transitionDuration = `1s`;
    }

    icon++;
    if (icon > 2) icon = 1;
}

// animação da entrada dos contatos
checkbox_contact.addEventListener('change', function() {
    if (checkbox_contact.checked)
    {
        
        for (let i = 1; i < 4; i++) 
        {
            setTimeout(function() {
                const contact = document.getElementById(`contact-${i}`);
                contact.style.transitionDuration = `1s`;
                contact.style.transform = `translateX(-220px)`;
            }, i * 100);
        }
    }
    else
    {
        for (let i = 1; i < 4; i++)
        {
            setTimeout(function() {
                const contact = document.getElementById(`contact-${i}`);
                contact.style.transform = `translateX(0px)`;                    
            }, i * 100);
        } 
        icon_not_animation.style.opacity = `0`;
    }
});





/* Animações CSS */

// animação de digitação do .texto-3
const text_to_change = document.querySelectorAll(`.text-3`);

function change_text()
{
    index++;
    let texts = ["Dev. Full-Stack", "Desenvolvedor Web", "Programador Python", "Programador C#"];

    text_to_change.forEach(element =>
    {
        function writing(){
            element.innerHTML = texts[index];
            element.classList.add(`text-3-animation-${index}`);	
        };


        function reset(){
            element.classList.remove(`text-3-animation-${index}`);
            element.innerHTML = "<br>";
            if (index >= 3) index = 0;
        }
        
        writing();
        setTimeout(reset, 9000);
    })
}






blink_contact();
setInterval(blink_contact, 3000);

change_text();
setInterval(change_text, 10000);
