// alert("script working");
const ctrlBtn = document.querySelector('.controls')
const mainContainer = document.querySelector('.container');
const length = document.querySelector('.size-input');
const resizeBtn = document.querySelector('.resize-btn');
const clearBtn = document.querySelector('.clear-btn'); 
        
createGrid(16);

    resizeBtn.addEventListener('click', ()=>{
        createGrid(fetchSize(length));
    })
    

    function createGrid (gridLength)
    {
        cleanBoard();
        for (let i = 0; i<gridLength; i++)
    {
        for(let j = 0; j<gridLength; j++)
        {
        const gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'pink';
        gridElement.style.boxSizing = 'border-box';
        gridElement.style.flexBasis = `${100/gridLength}%`;
        gridElement.style.border = '1px solid green';
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

