//get every vStack element add display flex and flex-direction column
const vStacks = document.querySelectorAll('vStack');
vStacks.forEach(vStack => {
    vStack.style.display = 'flex';
    vStack.style.flexDirection = 'column';

    if (vStack.hasAttribute('gap')) {
        const gapValue = vStack.getAttribute('gap');
        if (gapValue === 'small') {
            vStack.style.gap = 'calc(0.5rem + 0.5vw)';
        } else if (gapValue === 'medium') {
            vStack.style.gap = 'calc(1rem + 0.5vw)';
        } else if (gapValue === 'large') {
            vStack.style.gap = 'calc(2rem + 0.5vw)';
        } else {
            console.error(`Invalid gap value "${gapValue}" on element:`, vStack);
            vStack.style.outline = '2px solid red';
        }
    } else {
        vStack.style.gap = 'calc(1rem + 0.5vw)'; // default
    }
    if(vStack.hasAttribute('align')){
        const alignValue = vStack.getAttribute('align');
        if(alignValue === 'center'){
            vStack.style.alignItems = 'center';
        }else if(alignValue === 'end'){
            vStack.style.alignItems = 'flex-end';
        }else if(alignValue === 'start'){
            vStack.style.alignItems = 'flex-start';
        }else if(alignValue === 'baseline'){
            vStack.style.alignItems = 'baseline';
        }else if(alignValue === 'stretch'){
            vStack.style.alignItems = 'stretch';
        }else{
            console.error(`Invalid align value "${alignValue}" on element:`, vStack);
        }
    }
    else{
        vStack.style.alignItems = 'flex-start';
    }
    if(vStack.hasAttribute('wrap')){
        const wrapValue = vStack.getAttribute('wrap');
        if(wrapValue === 'true'){
            vStack.style.flexWrap = 'wrap';
        }else if(wrapValue === 'false'){
            vStack.style.flexWrap = 'nowrap';
        }
        else if(wrapValue === 'wrap-reverse'){
            vStack.style.flexWrap = 'wrap-reverse';
        }
        else{
            console.error(`Invalid wrap value "${wrapValue}" on element:`, vStack);
        }
    }
    else{
        vStack.style.flexWrap = 'nowrap';
    }
    if(vStack.hasAttribute('justify')){
        const justifyValue = vStack.getAttribute('justify');
        if(justifyValue === 'center'){
            vStack.style.justifyContent = 'center';
        }
        else if(justifyValue === 'end'){
            vStack.style.justifyContent = 'flex-end';
        }
        else if(justifyValue === 'start'){
            vStack.style.justifyContent = 'flex-start';
        }
        else if(justifyValue === 'between'){
            vStack.style.justifyContent = 'space-between';
        }
        else if(justifyValue === 'around'){
            vStack.style.justifyContent = 'space-around';
        }
        else if(justifyValue === 'evenly'){
            vStack.style.justifyContent = 'space-evenly';
        }
        else{
            console.error(`Invalid justify value "${justifyValue}" on element:`, vStack);
        }
    }
    else{
        vStack.style.justifyContent = 'flex-start';
    }
    if(vStack.hasAttribute('padding')){
        const paddingValue = vStack.getAttribute('padding');
        if(paddingValue === 'small'){
            vStack.style.padding = '0.5rem';
        }
        else if(paddingValue === 'medium'){
            vStack.style.padding = '1rem';
        }
        else if(paddingValue === 'large'){
            vStack.style.padding = '2rem';
        }
        else{
            console.error(`Invalid padding value "${paddingValue}" on element:`, vStack);
        }
    }
    else{
        vStack.style.padding = '0rem';
    }
    if(vStack.hasAttribute('width')){
        const widthValue = vStack.getAttribute('width');
        if(widthValue === 'full'){
            vStack.style.width = '100%';
        }
        else if(widthValue === 'half'){
            vStack.style.width = '50%';
        }
        else if(widthValue === 'third'){
            vStack.style.width = '33.33%';
        }
        else if(widthValue === 'quarter'){
            vStack.style.width = '25%';
        }
        else if(widthValue === 'fifth'){
            vStack.style.width = '20%';
        }
        else{
            console.error(`Invalid width value "${widthValue}" on element:`, vStack);
        }
    }
    else{
        vStack.style.width = 'auto';
    }
});

document.querySelectorAll('hStack').forEach(hStack => {
    hStack.style.display = 'flex';
    hStack.style.flexDirection = 'row';
    
    if(hStack.hasAttribute('gap')){
        const gapValue = hStack.getAttribute('gap');
        if(gapValue === 'small'){
            hStack.style.gap = 'calc(0.5rem + 0.5vw)';
        }
        else if(gapValue === 'medium'){
            hStack.style.gap = 'calc(1rem + 0.5vw)';
        }
        else if(gapValue === 'large'){
            hStack.style.gap = 'calc(2rem + 0.5vw)';
        }
        else{
            console.error(`Invalid gap value "${gapValue}" on element:`, hStack);
        }
    }
    else{
        hStack.style.gap = 'calc(1rem + 0.5vw)';
    }
    if(hStack.hasAttribute('align')){
        const alignValue = hStack.getAttribute('align');
        if(alignValue === 'center'){
            hStack.style.alignItems = 'center';
        }
        else if(alignValue === 'start'){
            hStack.style.alignItems = 'flex-start';
        }
        else if(alignValue === 'end'){
            hStack.style.alignItems = 'flex-end';
        }
        else if(alignValue === 'stretch'){
            hStack.style.alignItems = 'stretch';
        }
        else if(alignValue === 'baseline'){
            hStack.style.alignItems = 'baseline';
        }
        else{
            console.error(`Invalid align value "${alignValue}" on element:`, hStack);
        }
    }
    else{
        hStack.style.alignItems = 'stretch';
    }
    if(hStack.hasAttribute('wrap')){
        const wrapValue = hStack.getAttribute('wrap');
        if(wrapValue === 'true'){
            hStack.style.flexWrap = 'wrap';
        }else if(wrapValue === 'false'){
            hStack.style.flexWrap = 'nowrap';
        }
        else if(wrapValue === 'wrap-reverse'){
            hStack.style.flexWrap = 'wrap-reverse';
        }
        else{
            console.error(`Invalid wrap value "${wrapValue}" on element:`, hStack);
        }
    }
    else{
        hStack.style.flexWrap = 'nowrap';
    }
    if(hStack.hasAttribute('justify')){
        const justifyValue = hStack.getAttribute('justify');
        if(justifyValue === 'center'){
            hStack.style.justifyContent = 'center';
        }
        else if(justifyValue === 'end'){
            hStack.style.justifyContent = 'flex-end';
        }
        else if(justifyValue === 'start'){
            hStack.style.justifyContent = 'flex-start';
        }
        else if(justifyValue === 'between'){
            hStack.style.justifyContent = 'space-between';
        }
        else if(justifyValue === 'around'){
            hStack.style.justifyContent = 'space-around';
        }
        else if(justifyValue === 'evenly'){
            hStack.style.justifyContent = 'space-evenly';
        }
        else{
            console.error(`Invalid justify value "${justifyValue}" on element:`, hStack);
        }
    }
    else{
        hStack.style.justifyContent = 'flex-start';
    }
    if(hStack.hasAttribute('padding')){
        const paddingValue = hStack.getAttribute('padding');
        if(paddingValue === 'small'){
            hStack.style.padding = '0.5rem';
        }
        else if(paddingValue === 'medium'){
            hStack.style.padding = '1rem';
        }
        else if(paddingValue === 'large'){
            hStack.style.padding = '2rem';
        }
        else{
            console.error(`Invalid padding value "${paddingValue}" on element:`, hStack);
        }
    }
    else{
        hStack.style.padding = '0rem';
    }
    if(hStack.hasAttribute('width')){
        const widthValue = hStack.getAttribute('width');
        if(widthValue === 'full'){
            hStack.style.width = '100%';
        }
        else if(widthValue === 'half'){
            hStack.style.width = '50%';
        }
        else if(widthValue === 'third'){
            hStack.style.width = '33.33%';
        }
        else if(widthValue === 'quarter'){
            hStack.style.width = '25%';
        }
        else if(widthValue === 'fifth'){
            hStack.style.width = '20%';
        }
        else{
            console.error(`Invalid width value "${widthValue}" on element:`, hStack);
        }
    }
    else{
        hStack.style.width = 'auto';
    }
});

//get contain attribute from body and set the max width of all children (except body) to the value of the contain attribute
const containValue = document.body.getAttribute('contain');
if(containValue){
    document.querySelectorAll('*').forEach(element => {
        if(element.tagName !== 'BODY'){
            element.style.maxWidth = containValue;
        }
    });
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'flex-start';
    document.body.style.alignItems = 'center';
    document.body.style.minHeight = '100vh';
    document.body.style.width = '100vw';
}


