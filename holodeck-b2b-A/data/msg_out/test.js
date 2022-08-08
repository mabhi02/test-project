(function () {
    var textFile = null;
  function makeTextFile(text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  }


  var create = document.getElementById('create');
  var textbox = document.getElementById('textbox');

    //create a click event listener
  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.setAttribute('download', 'info.txt');
    //make the text file
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
        //wait for the link to be rendered and then initiate a click to download the file
     window.requestAnimationFrame(function () {
      var event = new MouseEvent('click');
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
  }, false);

})();