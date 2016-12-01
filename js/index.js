var UseIt = (function () {

    console.log('UseIt');

    var p = new Products()
        p.getProducts().then(function(list){
            console.log(list)
        });
 
    return {
        addArticle: function () {
            console.log('addArticle');
            
            console.log(l());
            var content = document.querySelector('template').content;
            // Update something in the template DOM.
            var span = content.querySelector('span');

            span.textContent = parseInt(span.textContent) + 1;
            document.querySelector('#container').appendChild(
                document.importNode(content, true));
        }
    }
})();