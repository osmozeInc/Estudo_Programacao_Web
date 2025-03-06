

/* BARRA DE OPÇÕES */

const checkbox_bars = document.getElementById('checkbox-bars');
const home_page = document.getElementById('home-page');
const port_page = document.getElementById('port-page');
const talk_page = document.getElementById('talk-page');
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

function create_events() {
    const event = new Event('change');
    checkbox_bars.checked = false;
    checkbox_bars.dispatchEvent(event);
}

function up_down_title(position){
    title_page.style.transitionDuration = `1s`;
    title_page.style.transform = `translateY(${position}px)`;
}

document.getElementById('option-1').addEventListener('click', function()
{
    create_events();

    home_page.style.display = 'block';
    port_page.style.display = 'none';
    talk_page.style.display = 'none';

    up_down_title(0);
});

document.getElementById('option-2').addEventListener('click', function()
{
    create_events();

    home_page.style.display = 'none';
    port_page.style.display = 'block';
    talk_page.style.display = 'none';

    up_down_title(-45);
});

document.getElementById('option-3').addEventListener('click', function()
{
    create_events();

    home_page.style.display = 'none';
    port_page.style.display = 'none';
    talk_page.style.display = 'block';

    up_down_title(-90);
});

document.querySelector('.link-1').addEventListener('click', function() {
        create_events();

        home_page.style.display = 'none';
        port_page.style.display = 'block';
        talk_page.style.display = 'none';

        up_down_title(-45);
});

document.querySelector('.link-2').addEventListener('click', function() {
        create_events();

        home_page.style.display = 'none';
        port_page.style.display = 'none';
        talk_page.style.display = 'block';

        up_down_title(-90);
});




/* ICONE DE CONTATOS */

const checkbox_contact = document.getElementById('checkbox-contact');
const icon_not_animation = document.getElementById(`icon-not-animated`);
let icon = 1;


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





/* Animações CSS */

const text_to_change = document.querySelector(`.text-3`);
let index = 0;
let texts = ["Dev. Full-Stack", "Desenvolvedor Web", "Programador Python", "Programador C#"];


// animação de digitação do .texto-3
function change_text()
{
    if (index > 3) 
        index = 0;

    text_to_change.innerHTML = texts[index];
    text_to_change.classList.add(`text-3-animation-${index}`);


    setTimeout(() => {
        text_to_change.classList.remove(`text-3-animation-${index}`);
        text_to_change.innerHTML = "<br>";
        index++;
    }, 9000);
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





/* BARRA DE LOG-IN E SIGN-IN */

const log_in = document.getElementById(`log-in`);
const sing_in = document.getElementById(`sign-in`);

const selection_type = document.querySelector(`.selection-bar`);
const button_type = document.querySelector(`.selection-type-bar`);

const log_in_container = document.querySelector(`.log-in`);
const sing_in_container = document.querySelector(`.sign-in`);


log_in.addEventListener('click', function() {
    button_type.style.transform = `translateX(0px)`;

    log_in_container.style.display = `flex`;
    sing_in_container.style.display = `none`;
});

sing_in.addEventListener('click', function() {
    button_type.style.transform = `translateX(${selection_type.offsetWidth - 120}px)`;

    log_in_container.style.display = `none`;
    sing_in_container.style.display = `flex`;
});





/* VISIBILIDADE DA SENHA */

const hide_password = document.querySelector(`.fa-eye`);
const checkbox_password = document.querySelector('.show-password-checkbox');
const password = document.querySelector(`#password`);
let show = false;


// animação da visibilidade da senha
checkbox_password.addEventListener('click', function() {

    if (!show)
    {
        console.log('show')
        hide_password.classList.remove('fa-eye');
        hide_password.classList.add('fa-eye-slash');
        show = true;
        password.setAttribute('type', 'text');
    }
    else
    {
        console.log('hide')
        hide_password.classList.remove('fa-eye-slash');
        hide_password.classList.add('fa-eye');
        show = false;
        password.setAttribute('type', 'password');
    }
});






check_title();
blink_contact();
change_text();

setInterval(blink_contact, 3000);
setInterval(change_text, 10000);