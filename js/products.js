var Products = function () {

    var list = [];
    console.log('Products');

    function getProducts() {

        return new Promise(function (resolve, reject) {

            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open("GET", "db/products.json", true);
            xobj.onreadystatechange = function () {
                if (xobj.status === 200) {
                    console.log('loaded');
                    window.setTimeout(
                        function () {
                            var resObjFromJson = JSON.parse(xobj.responseText);
                            resolve(resObjFromJson.products);
                        }, 1000);
                } else {
                    reject(Error('Json didn\'t load successfully; error code:' + xobj.statusText));
                }
            };
            xobj.onerror = function () {
                reject(Error('There was a network error.'));
            };

            xobj.send(null);
        });
    }

    return function () {
        return {
            list: list,
            getProducts: getProducts

        }
    }
} ();


