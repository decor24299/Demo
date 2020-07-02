const app = document.getElementById('app');

for (let i = 0; i < 3; i++) {
    app.innerHTML += `<div class="card mb-5">
                        <img class="card-img-top" src="img/product-${i}.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Iphone XS</h5>
                            <p class="card-text">$12.20</p>
                            <a href="#" class="btn btn-danger">Edit</a>
                            <a href="#" class="btn btn-danger">Delete</a>
                        </div>
                    </div>`;
}