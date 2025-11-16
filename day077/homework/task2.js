// 3) გატესტეთ და გამოიყენეთ თითეული მოვლენა, ასევე აღწერეთ თუ როდის მოხდება ეს მოვლენები

// onclick
// onload
// onunload
// onchange
// onmouseover
// onmouseout
// onmousedown
// onmouseup
// onblur
// onfocus

let button = document.createElement('button');
button.innerText = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', function() {
    alert('Button Clicked! (onclick)');
});

window.addEventListener('load', function() {
    console.log('Page Loaded! (onload)');
}); 
window.addEventListener('beforeunload', function() {
    console.log('Page Unloading! (onunload)');
});
let input = document.createElement('input');
input.type = 'text';
document.body.appendChild(input);
input.addEventListener('change', function() {
    console.log('Input Changed! (onchange)');
});
input.addEventListener('mouseover', function() {
    console.log('Mouse Over Input! (onmouseover)');
}
);
input.addEventListener('mouseout', function() {
    console.log('Mouse Out of Input! (onmouseout)');
});
input.addEventListener('mousedown', function() {
    console.log('Mouse Button Down on Input! (onmousedown)');
}
);
input.addEventListener('mouseup', function() {
    console.log('Mouse Button Up on Input! (onmouseup)');
});
input.addEventListener('blur', function() {
    console.log('Input Lost Focus! (onblur)');
}
);
input.addEventListener('focus', function() {
    console.log('Input Gained Focus! (onfocus)');
});
