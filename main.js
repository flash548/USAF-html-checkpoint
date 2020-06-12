window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('searchButton').addEventListener('click', (event) => {
        var cells = document.querySelectorAll(".cell");
        document.getElementById('searchBox').value = 'Escape From New York';
        for (var i =1; i< cells.length; i++) {
            cells[i].style['display'] = 'none';
        }
    });
    
    var imgs = document.querySelectorAll("img");
    for (var i =0; i< imgs.length; i++) {
            imgs[i].addEventListener('click', (event) => {
                window.location.href = 'detail.html';            
            });
    }
    
});