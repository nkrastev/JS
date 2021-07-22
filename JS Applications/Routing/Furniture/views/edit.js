import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { getItemById, editFurniture } from '../api/data.js';

export async function editView(context) {

    const dataForEdit = await getItemById(context.params.id);
    console.log(dataForEdit);
    
    const layoutTemplate = item => html`<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control " id="new-make" type="text" name="make" value=${item.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control " id="new-model" type="text" name="model" value="${item.model}">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control " id="new-year" type="number" name="year" value="${item.year}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description" value="${item.description}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price" value="${item.price}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img"  value="${item.img}">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material"  value="${item.material}">
                </div>
                <input type="submit" class="btn btn-primary" value="Edit" @click=${onFormSubmit} id=${item._id} />
            </div>
        </div>
    </form>
</div>`;



    const main = document.querySelector('main');
    render(layoutTemplate(dataForEdit), main);

    async function onFormSubmit(event) {
        event.preventDefault();

        let id=event.target.id;


        let make = document.querySelector('#new-make');
        let year = document.querySelector('#new-year');
        let price = document.querySelector('#new-price');
        let model = document.querySelector('#new-model');
        let image = document.querySelector('#new-image');
        let description = document.querySelector('#new-description');
        let material = document.querySelector('#new-material');

        const editedFurniture = {
            make: make.value,
            model: model.value,
            year: year.value,
            description: description.value,
            price: price.value,
            "img": image.value,
            material: material.value
        }
        
        //validation make
        if (make.value.length < 4) {
            make.classList = 'form-control';
            make.classList.add('is-invalid');
            render(layoutTemplate(editedFurniture), main);
            return;
        } else {
            make.classList = 'form-control';
            make.classList.add('is-valid');
            render(layoutTemplate(editedFurniture), main);
        }
        //validation model
        if (model.value.length < 4) {
            model.classList = 'form-control';
            model.classList.add('is-invalid');
            render(layoutTemplate(editedFurniture), main);
            return;
        } else {
            model.classList = 'form-control';
            model.classList.add('is-valid');
            render(layoutTemplate(editedFurniture), main);
        }
        //validation •	Year must be between 1950 and 2050
        if (year.value > 2050 || year.value < 1950) {
            year.classList = 'form-control';
            year.classList.add('is-invalid');
            render(layoutTemplate(editedFurniture), main);
            return;
        } else {
            year.classList = 'form-control';
            year.classList.add('is-valid');
            render(layoutTemplate(editedFurniture), main);
        }
        //validation •	Description must be more than 10 symbols
        if (description.value.length < 10) {
            description.classList = 'form-control';
            description.classList.add('is-invalid');
            return;
            render(layoutTemplate(editedFurniture), main);
        } else {
            description.classList = 'form-control';
            description.classList.add('is-valid');
            render(layoutTemplate(editedFurniture), main);
        }
        //validation •	Price must be a positive number
        if (price.value <= 0) {
            price.classList = 'form-control';
            price.classList.add('is-invalid');
            render(layoutTemplate(editedFurniture), main);
            return;
        } else {
            price.classList = 'form-control';
            price.classList.add('is-valid');
            render(layoutTemplate(editedFurniture), main);
        }
        //validation •	Image URL is required
        if (image.value == '') {
            image.classList = 'form-control';
            image.classList.add('is-invalid');
            render(layoutTemplate(editedFurniture), main);
            return;
        } else {
            image.classList = 'form-control';
            image.classList.add('is-valid');
            render(layoutTemplate(editedFurniture), main);
        }
        //edit object
        
        //console.log('ID'+id);
        //console.log('DATA'+editedFurniture);
        //query for save data
        await editFurniture(id,editedFurniture);

        //redirect to main
        page.redirect('/');
    }

}