// alert("script working");
const ctrlBtn = document.querySelector('.controls')
const mainContainer = document.querySelector('.container');
const length = document.querySelector('.size-input');
const resizeBtn = document.querySelector('.resize-btn');
const clearBtn = document.querySelector('.clear-btn'); 
let currentGridSize =25;
createGrid(currentGridSize);

    resizeBtn.addEventListener('click', ()=>{
        gridSize = fetchSize(length);
        if(gridSize!=0 && gridSize != "")
        {
        createGrid(gridSize);
        }
        else
        {
        createGrid(16);            
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
        // gridElement.style.border = '1px solid green';
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
    currentGridSize =inputSize;
    return inputSize;
};

mainContainer.addEventListener('mouseover', (item)=>
{
    item.target.style.cursor = "pointer";
    item.target.style.backgroundColor = "black"; 
})

clearBtn.addEventListener('click',()=>
    {
        if (currentGridSize!="")
            createGrid(currentGridSize)
    });