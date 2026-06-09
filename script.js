// alert("script working");
const ctrlBtn = document.querySelector('.controls')
const mainContainer = document.querySelector('.container');
const length = document.querySelector('.size-input');
const resizeBtn = document.querySelector('.resize-btn');
const clearBtn = document.querySelector('.clear-btn'); 
let size =0;
    if (size === 0)
    {
        size = 16;

    for (let i = 0; i<size; i++)
    {
        for(let j = 0; j<size; j++)
        {
        const gridElement = document.createElement('div');
        gridElement.style.backgroundColor = 'pink';
        gridElement.style.flexBasis = `${100/size}%`;
        gridElement.style.border = '1px solid green';
        mainContainer.appendChild(gridElement);

        }
    }

    } 




// function gridSizeFinder(length)
// {
//     const gridSize = length.addEventListener('change', (item)=>
//     {
//         size = parseInt(item.target.value);
//         if (typeof size === "number" &&  size >= 1 )
//         {
//             return size*size;
//         }
//         else
//         {
//             alert("please enter a number greater than 16");
//         }
//     }
//     return gridSize;
// }