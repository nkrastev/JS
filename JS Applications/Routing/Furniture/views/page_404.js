import { html, render } from 'https://unpkg.com/lit-html?module';

export function notfound(){
    const template=html `<h2 style="text-align:center">The requested page is missing. 404 Error.</h2>`;
    const sectionMain=document.querySelector('main');
    render(template, sectionMain);
}