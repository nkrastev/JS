import { html, render } from 'https://unpkg.com/lit-html?module';
import { getItemById } from '../api/data.js';

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

    function onFormSubmit(event){
        event.preventDefault();

        let make=document.querySelector('#new-make');
        let price=document.querySelector('#new-price');
        let model=document.querySelector('#new-model');
        let image=document.querySelector('#new-image');
        let description=document.querySelector('#new-description');
        let material=document.querySelector('#new-material');

        //validation
        if (make.value.length<4) {
            make.classList='form-control';
            make.classList.add('is-invalid');            
            render(layoutTemplate(), main);
        }else{
            make.classList='form-control';
            make.classList.add('is-valid');
            render(layoutTemplate(), main);
        }

        //query for save data

        //redirect to main
    }

}