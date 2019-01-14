import _ from 'lodash';
import './style.css';
import addIcon from './add.png';
import deleteIcon from './delete.png';

function component() {
    let element = document.createElement('div');

    //调用Lodash的join方法
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //加入image
    var myAddIcon = new Image();
    myAddIcon.src = addIcon;
    element.appendChild(myAddIcon);

    var myDeleteIcon = new Image();
    myDeleteIcon.src = deleteIcon;
    element.appendChild(myDeleteIcon);

    return element;    
}

document.body.appendChild(component());