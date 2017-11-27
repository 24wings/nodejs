/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */

function readImage(successCallback, errorCallback) {
    var inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.onchange = function() {
        var file = inputEl.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var base64 = event.target.result;
                successCallback(base64);
            }
            reader.readAsDataURL(file);
        }
        document.body.appendChild(inputEl);

    };
    inputEl.click();
}