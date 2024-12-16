/* BARRA DE OPÇÕES */

const checkbox_bars = document.getElementById('checkbox-bars');
const home_page = document.getElementById('home-page');
const about_page = document.getElementById('about-page');
const portfolio_page = document.getElementById('portfolio-page');
const title_page = document.getElementById('title-page');


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

    title_page.style.transform = `translateY(-65px)`;
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

    title_page.style.transform = `translateY(-130px)`;
    title_page.style.transitionDuration = `1s`;
});





/* ICONE DE CONTATOS */

const checkbox_contact = document.getElementById('checkbox-contact');
const icon_not_animation = document.getElementById(`icon-not-animated`);
var icon = 1;


// animação da aparição dos icones dos contatos no botão
function aaaa() 
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

// posiciona os elementos em colunas
for (let i = 1; i < 4; i++)
{
    const contact = document.getElementById(`contact-${i}`);
    contact.style.marginTop = `${160 * i}px`;
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



aaaa();
setInterval(aaaa, 3000);