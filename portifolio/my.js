
const checkbox_bars = document.getElementById('checkbox-bars');
const home_page = document.getElementById('home-page');
const port_page = document.getElementById('port-page');
const talk_page = document.getElementById('talk-page');
const title_page = document.getElementById('title-page');


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

// verificação do titulo da página em relação a página
function check_title() {
    let home = window.getComputedStyle(home_page);
    let port = window.getComputedStyle(port_page);
    let talk = window.getComputedStyle(talk_page);

    if (home.display == 'block')
        title_page.style.transform = `translateY(0px)`;
    else if (port.display == 'block')
        title_page.style.transform = `translateY(-45px)`;
    else if (talk.display == 'block')
        title_page.style.transform = `translateY(-90px)`;
    else console.log('erro');
}

// seleção das páginas pelas opções
document.getElementById('option-1').addEventListener('click', function()
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);

    home_page.style.display = 'block';
    port_page.style.display = 'none';
    talk_page.style.display = 'none';

    title_page.style.transform = `translateY(0px)`;
    title_page.style.transitionDuration = `1s`;
});

document.getElementById('option-2').addEventListener('click', function()
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);

    home_page.style.display = 'none';
    port_page.style.display = 'block';
    talk_page.style.display = 'none';

    title_page.style.transform = `translateY(-45px)`;
    title_page.style.transitionDuration = `1s`;
});

document.getElementById('option-3').addEventListener('click', function()
{
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);

    home_page.style.display = 'none';
    port_page.style.display = 'none';
    talk_page.style.display = 'block';

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
        port_page.style.display = 'block';
        talk_page.style.display = 'none';

        title_page.style.transform = `translateY(-45px)`;
        title_page.style.transitionDuration = `1s`;
    });
});





const checkbox_contact = document.getElementById('checkbox-contact');
const icon_not_animation = document.getElementById(`icon-not-animated`);
let icon = 1;


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
    if (icon == 5) icon = 1;
}

// animação da entrada dos contatos
checkbox_contact.addEventListener('change', function() {
    if (checkbox_contact.checked)
    {
        
        for (let i = 1; i < 5; i++) 
        {
            setTimeout(function() {
                const contact = document.getElementById(`contact-${i}`);
                contact.style.transitionDuration = `1s`;
                contact.style.transform = `translateX(-205px)`;
            }, i * 100);
        }
    }
    else
    {
        for (let i = 1; i < 5; i++)
        {
            setTimeout(function() {
                const contact = document.getElementById(`contact-${i}`);
                contact.style.transform = `translateX(0px)`;                    
            }, i * 100);
        } 
        icon_not_animation.style.opacity = `0`;
    }
});





const text_to_change = document.querySelectorAll(`.text-3`);
let index = -1;


/* Animações CSS */

// animação de digitação do .texto-3

function change_text()
{
    index++;
    if (index > 3) index = 0;
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
        }
        
        writing();
        setTimeout(reset, 9000);
    })
}





/* FILTRO DE PROJETOS */

// função para mudar a cor dos botões de filtro
const buttons = document.querySelectorAll('.filter-button')
let buttons_active = [];

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (!button.classList.contains('button-active'))
        {
            button.classList.add('button-active');
            buttons_active.push(button.textContent)
        }
        else
        {
            button.classList.remove('button-active');
            buttons_active.splice(buttons_active.indexOf(button.textContent), 1);
        }
        filter_items() // chama a função a cada alteração
    });
});

// função para filtrar projetos
const projects = document.querySelectorAll('.port-project-card-container')

function filter_items(){        
    projects.forEach(project => {
        console.log(buttons_active)
        console.log(project.dataset.tag1)

        if (buttons_active.includes(project.dataset.tag1) || buttons_active.includes(project.dataset.tag2) || buttons_active.length == 0)
            project.style.display = 'flex';
        else
            project.style.display = 'none';
    })
}






/* Name Section do Portifolio */

function up_name_section(){
    document.querySelectorAll('.name-section').forEach(name => {
        name.style.transitionDuration = `1s`;
        name.style.transform = `translateY(0px)`;
    })
}


check_title();
blink_contact();
change_text();
up_name_section();

setInterval(blink_contact, 3000);
setInterval(change_text, 10000);
