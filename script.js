    const mainContainer = document.querySelector('.container');
    const length = document.querySelector('.size-input');
    const resizeBtn = document.querySelector('.resize-btn');
    const clearBtn = document.querySelector('.clear-btn'); 
    let currentGridSize =40;

    createGrid(currentGridSize);

    let isDrawing = false;
    let isEraserActive =false;
    let currentMode = 'black';

        resizeBtn.addEventListener('click', ()=>{
            const gridSize = fetchSize(length);
            if(isNaN(gridSize))
            {
                alert("Please enter a number");
            }
            else if(gridSize>100)
            {
            alert("Please don't exceed 100x100 cells");
            createGrid(currentGridSize);
            }
            else if(gridSize==1)
            {
            alert("1x1 is off limits try 2");
            createGrid(currentGridSize);
            }
            else if (gridSize!=0&&gridSize!="")
            {
                currentGridSize = gridSize;
                createGrid(currentGridSize);
            }
        })
        

        function createGrid (gridLength)
        {
            cleanBoard();
            for (let i = 0; i<gridLength; i++)
        {
            for(let j = 0; j<gridLength; j++)
            {
            const gridElement = document.createElement('div');
            gridElement.style.backgroundColor = 'white';
            gridElement.style.boxSizing = 'border-box';
            gridElement.style.flexBasis = `${100/gridLength}%`;
            gridElement.style.border = '1px solid rgba(0, 128, 0, 0.1)';
            gridElement.dataset.opacity = "0.2";
            mainContainer.appendChild(gridElement);

            }
        }
    }

    


    function cleanBoard()
    {
        mainContainer.innerHTML = '';
    }

    function fetchSize(ele)
        {
        const inputSize = ele.value;
        ele.value ="";
        return inputSize;
    };

function paintGrid(item) {
    if (!isDrawing) return;
    item.preventDefault();

    if (item.target === mainContainer) return;
    
        if(currentMode==='color')
        {
        item.target.style.opacity = 1;
        item.target.dataset.opacity =1;
        }else
        {
        item.target.style.cursor = "pointer";
        let currentOpacity = parseFloat(item.target.dataset.opacity);
        currentOpacity+=0.2;
        item.target.dataset.opacity =currentOpacity;
        item.target.style.opacity = currentOpacity;
        }


        if (isEraserActive) {
            item.target.style.backgroundColor = 'white';
        } else if (currentMode==='random'){

        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let color = `rgb(${red}, ${green}, ${blue})`;
        item.target.style.backgroundColor = color;
        selectedColor =color;

        }            
        else{
            item.target.style.backgroundColor = selectedColor;
        }
    
}

mainContainer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDrawing = true;
    paintGrid(e);
});

    clearBtn.addEventListener('click',()=>
        {
            if (currentGridSize!="")
                createGrid(currentGridSize)
        });

mainContainer.addEventListener('mouseover', paintGrid); 

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

// erase functionality

const erase = document.querySelector('.eraser-btn');

erase.addEventListener('click', ()=>
{   
    isEraserActive = !isEraserActive; 
    erase.classList.toggle('eraserClicked', isEraserActive);
})

const colorBtn = document.querySelector('.color-btn');
const colorPicker = document.querySelector('.color-picker');

let selectedColor = '#000000';

colorPicker.addEventListener('input', (e) => {
    currentMode ='color';
    selectedColor = e.target.value;
    colorBtn.style.backgroundColor = selectedColor;
    if (selectedColor === '#ffffff' || selectedColor.toLowerCase() === '#fff') {
        colorBtn.style.color = 'black';
    } else {
        colorBtn.style.color = 'white';
    }
});

const opacBtn = document.querySelector('.opac-btn');

opacBtn.addEventListener('click', ()=>
{
    currentMode = 'black';
    selectedColor ="black";
    colorBtn.style.backgroundColor = 'rgb(51, 47, 47)';

})


const randomColor = document.querySelector('.randomClr-btn');

randomColor.addEventListener('click', ()=>
{
    currentMode = 'random';
    isEraserActive = false;
})