/* BARRA DE OPÇÕES */

// animação das opções na barra de opções
const checkbox_bars = document.getElementById('checkbox-bars');

checkbox_bars.addEventListener('change', function() {
    for (let i = 1; i < 4; i++)
    {    
        const option = document.getElementById(`option-${i}`);
        if (checkbox_bars.checked) 
        {
            setTimeout(function(){
                option.style.transform = `translate(-110px, ${80 * i}px)`;
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
});

document.getElementById('option-2').addEventListener('click', function() 
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);
});


document.getElementById('option-3').addEventListener('click', function() 
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);
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