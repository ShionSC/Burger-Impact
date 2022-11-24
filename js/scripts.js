$(document).ready(function () {

    'use strict';

    for (let i = 0; i < hamburguesas.length; i++) {

        $('#hamburguesas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ hamburguesas[i]['Imagen'] +'" alt="'+ hamburguesas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ hamburguesas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ hamburguesas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ hamburguesas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ hamburguesas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ hamburguesas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < sand.length; i++) {

        $('#sand').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ sand[i]['Imagen'] +'" alt="'+ sand[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ sand[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ sand[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ sand[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ sand[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ sand[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < chori.length; i++) {

        $('#chori').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ chori[i]['Imagen'] +'" alt="'+ chori[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ chori[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ chori[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ chori[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ chori[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ chori[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < entradas.length; i++) {

        $('#entradas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ entradas[i]['Imagen'] +'" alt="'+ entradas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ entradas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ entradas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ entradas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ entradas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ entradas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < papas.length; i++) {

        $('#papas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ papas[i]['Imagen'] +'" alt="'+ papas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ papas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ papas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ papas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ papas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ papas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < ensaladas.length; i++) {

        $('#ensaladas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ ensaladas[i]['Imagen'] +'" alt="'+ ensaladas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ ensaladas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ ensaladas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ ensaladas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ ensaladas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ ensaladas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < bebidas.length; i++) {

        $('#bebidas').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ bebidas[i]['Imagen'] +'" alt="'+ bebidas[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ bebidas[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ bebidas[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ bebidas[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ bebidas[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ bebidas[i]['Precio'] +'</div>' +
                    '<div class="row d-flex justify-content-center"><button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div></div>' +
            '</div>'
        );
    }

    for (let i = 0; i < postres.length; i++) {

        $('#postres').append(
            '<div class="mx-auto mx-md-2 mx-lg-4 my-3 py-3 card-producto menu">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" style="border-radius: 10px;" data-name="product_image" src="../img/productos/'+ postres[i]['Imagen'] +'" alt="'+ postres[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name" class="my-2">'+ postres[i]['Nombre'] +'</h4>' +
                    '<div><p data-name="product_desc" style="height:130px">'+ postres[i]['Descripcion'] +'</p></div>' +
                    '<input name="product_price" value="'+ postres[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ postres[i] +'" type="hidden" >' +
                    '<div class="mb-3">$ '+ postres[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-genshin">Agregar</button>' +
                '</div>' +
            '</div>'
        );
    }



    $('#carrito').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            //'<img class="img-fluid" src="{product_image}" />' +
            '<p class="h5 list-group-item-heading">{product_name}</p>' +
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir'
        }
    });
});