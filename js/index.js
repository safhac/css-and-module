// (function () {

//     var useIt = function () {
//         var content = document.querySelector('template').content;
//         // Update something in the template DOM.
//         var span = content.querySelector('span');
//         function addArticle() {
//             span.textContent = parseInt(span.textContent) + 1;
//             document.querySelector('#container').appendChild(
//                 document.importNode(content, true));
//         }

//         return {
//             addMore: addArticle
//         }
//     }
// })();

document.getElementById('button').addEventListener('click', function () {
    useIt.addArticle();
});

var useIt = (function () {


    return {
        addArticle: function () {
            console.log('addArticle');
            var content = document.querySelector('template').content;
            // Update something in the template DOM.
            var span = content.querySelector('span');

            span.textContent = parseInt(span.textContent) + 1;
            document.querySelector('#container').appendChild(
                document.importNode(content, true));
        }
    }
})();