const grid = document.querySelector('.grid')
const eraser = document.querySelector('.eraser');
const rgb = document.querySelector('.rgb');
const reset = document.querySelector('.reset');
const chooseColor = document.getElementById('color');
const cell= grid.childNodes;
const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');


//Function to create RBG button and random colors when 'rgb' button is clicked
      rgb.addEventListener('click', function(){
        var val = document.getElementById('slider').value;
          for (let i = 0; i < val*val; i++) {
              cell[i].addEventListener('mouseover', function(event){
                function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                      color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                  }
                  event.target.style.backgroundColor = getRandomColor();
              })
          }
      });

//Function to reset the grid fully when "reset" button is clicked
    reset.addEventListener('click', function(){
        var val = document.getElementById('slider').value;
        for (let i = 0; i < val*val; i++) {
            cell[i].style.backgroundColor = 'white';
        }
    });

//Function to erase a single grid when hovered over when 'eraser' button is clicked
      eraser.addEventListener('click', function(){
        var val = document.getElementById('slider').value;
          for (let i = 0; i < val*val; i++) {
              cell[i].addEventListener('mouseover', function(event){
                  event.target.style.backgroundColor = 'white';
              })
          }
      });

//Function for color palette to choose which color yo use
      chooseColor.addEventListener('input', function(){
        var val = document.getElementById('slider').value;
        const newColor = document.getElementById('color').value;
          for (let i = 0; i < val*val; i++) {
              cell[i].addEventListener('mouseover', function(event){
                  event.target.style.backgroundColor = newColor;
              })
          }
      });

      //Function to adjust slider to make grid smaller or bigger and clear when it adjusts.
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    function removeAllChildNodes(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

//Function to create the grid and the color black is default
      createGrid = () => {
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            })
            grid.appendChild(div); 
        }
    };

createGrid();