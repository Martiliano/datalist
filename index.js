
var prodList = document.getElementById("search_name");

prodList.addEventListener('input', async function (e) {
    e.preventDefault();

    var datalist = this.list;
    var codeOfProduct = "0";

    for (i = 0; i < datalist.options.length; i++) {
        if (datalist.options[i].value === this.value) {
            codeOfProduct = datalist.options[i].dataset.code;
            break;
        }
    }

    if(codeOfProduct !== "0") {
        await getProductByCode(codeOfProduct);
    }
    
});

prodList.addEventListener('focus', async function (e) {
    e.preventDefault();

    this.list.style.display = "block";
    this.list.style.position = "absolute";
    
});

prodList.addEventListener('blur', async function (e) {
    e.preventDefault();

    this.list.style.display = "none";
    
});

prodList.addEventListener('keyup', async function (e) {
    e.preventDefault();

    var datalist = this.list;
    var filter = this.value;
    var key = e.key;

    if(key === 'Enter') {
        for (var i = 0; i < datalist.options.length; i++) {
            if(datalist.options[i].value == this.value) {
                await getProductByCode(datalist.options[i].dataset.code);
                break;
            }
        }
        return;
    }

    let formData = new FormData();
    formData.append('filter', filter);

    const getSelectedProducts = await fetch("getselectedproducts.php", {
        method: 'POST',
        body: formData,
    });

    getSelectedProducts.json().then(data => {

        var autoComplete = '';

        for (var i = datalist.options.length; i > 0; i--) {
            datalist.options[i - 1].remove();
        }

        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {

                if (i == 0) {
                    var opt = document.createElement("option");

                    opt.value = 'Search product by name';
                    opt.dataset.code = 0;

                    datalist.appendChild(opt);

                    if(this.value.length > 3) {
                        if(this.value.toUpperCase() == data[i].name.substr(0, this.value.length).toUpperCase()) {
                            autoComplete = data[i].name;
                        }
                    }

                }

                var opt = document.createElement("option");

                opt.value = data[i].name;
                opt.dataset.code = data[i].id;

                datalist.appendChild(opt);
            }

            if(key !== 'Backspace' && autoComplete !== '') {
                var ini = this.value.length;
                this.value = autoComplete;
                this.setSelectionRange(ini, autoComplete.length);
            }

        }

    });

});

getAllProducts();

async function getProductByCode(code) {
    let formData = new FormData();
    formData.append('code', code);

    const productByCode = await fetch("getproductbycode.php", {
        method: 'POST',
        body: formData,
    });

    productByCode.json().then(data => {

        if(data.length>0) {
            var prodName = document.getElementById("prod_name");
            var prodDepartment = document.getElementById("prod_department");
            var prodPrice = document.getElementById("prod_price");

            prodName.value = data[0].name;
            prodDepartment.value = data[0].department;
            prodPrice.value = data[0].price;
        }

    });
}

async function getAllProducts() {

    const allProducts = await fetch("getallproducts.php", {
        method: 'POST',
    });

    allProducts.json().then(data => {

        var datalist = document.getElementById("search_name").list;

        for (var i = datalist.options.length; i > 0; i--) {
            datalist.options[i - 1].remove();
        }

        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {

                if (i == 0) {
                    var opt = document.createElement("option");

                    opt.value = 'Search product by name';
                    opt.dataset.code = 0;

                    datalist.appendChild(opt);
                }

                var opt = document.createElement("option");

                opt.value = data[i].name;
                opt.dataset.code = data[i].id;

                datalist.appendChild(opt);
            }
        }

    });
}