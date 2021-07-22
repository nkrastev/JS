import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { getItemById, createFurniture } from '../api/data.js';

export async function createView(context) {

    //const detailedData = await getItemById(context.params.id);
    //const userId = sessionStorage.getItem('userId');

    const layoutTemplate = item => html`<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control " id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control " id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control " id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" @click=${onFormSubmit} />
            </div>
        </div>
    </form>
</div>`;



    const main = document.querySelector('main');
    render(layoutTemplate(), main);

    async function onFormSubmit(event){
        event.preventDefault();

        let make=document.querySelector('#new-make');
        let year=document.querySelector('#new-year');
        let price=document.querySelector('#new-price');
        let model=document.querySelector('#new-model');
        let image=document.querySelector('#new-image');
        let description=document.querySelector('#new-description');
        let material=document.querySelector('#new-material');

        let isAllValid=true;
        //validation make
        if (make.value.length<4) {
            make.classList='form-control';
            make.classList.add('is-invalid');                       
            render(layoutTemplate(), main);
            return;
        }else{
            make.classList='form-control';
            make.classList.add('is-valid');
            render(layoutTemplate(), main);
        }
        //validation model
        if (model.value.length<4) {
            model.classList='form-control';
            model.classList.add('is-invalid');                       
            render(layoutTemplate(), main);
            return;
        }else{
            model.classList='form-control';
            model.classList.add('is-valid');
            render(layoutTemplate(), main);
        }
        //validation •	Year must be between 1950 and 2050
        if (year.value>2050 || year.value<1950) {
            year.classList='form-control';
            year.classList.add('is-invalid');                        
            render(layoutTemplate(), main);
            return;
        }else{
            year.classList='form-control';
            year.classList.add('is-valid');
            render(layoutTemplate(), main);
        }
        //validation •	Description must be more than 10 symbols
        if (description.value.length<10) {
            description.classList='form-control';
            description.classList.add('is-invalid'); 
            return;          
            render(layoutTemplate(), main);
        }else{
            description.classList='form-control';
            description.classList.add('is-valid');
            render(layoutTemplate(), main);
        }
        //validation •	Price must be a positive number
        if (price.value<=0) {
            price.classList='form-control';
            price.classList.add('is-invalid');                      
            render(layoutTemplate(), main);
            return;
        }else{
            price.classList='form-control';
            price.classList.add('is-valid');
            render(layoutTemplate(), main);
        }
        //validation •	Image URL is required
        if (image.value=='') {
            image.classList='form-control';
            image.classList.add('is-invalid');            
            render(layoutTemplate(), main);
            return;
        }else{
            image.classList='form-control';
            image.classList.add('is-valid');
            render(layoutTemplate(), main);
        }       
        //create object
        const newFurniture={           
            make:make.value,
            model:model.value,
            year:year.value,
            description:description.value,
            price:price.value,
            "img": image.value,
            material:material.value            
        }

        console.log(newFurniture);
        //query for save data
        await createFurniture(newFurniture);

        //redirect to main
        page.redirect('/');
    }

}