    const mainContainer = document.querySelector('.container');
    const length = document.querySelector('.size-input');
    const resizeBtn = document.querySelector('.resize-btn');
    const clearBtn = document.querySelector('.clear-btn'); 
    let currentGridSize =40;

    createGrid(currentGridSize);

    let isDrawing = false;

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

    window.addEventListener('mousedown', ()=> isDrawing = true);
    window.addEventListener('mouseup', ()=> isDrawing = false);

    mainContainer.addEventListener('mouseover', (item)=>
    {
        if (isDrawing)
        {
        item.target.style.cursor = "pointer";
        item.target.style.backgroundColor = "black";
        }

    })

    clearBtn.addEventListener('click',()=>
        {
            if (currentGridSize!="")
                createGrid(currentGridSize)
        });