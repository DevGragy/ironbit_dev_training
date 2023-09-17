{/* <ul>
    <li><a href="..."><img src="..." alt=""></a>
    <li><a href="..."><img src="..." alt=""></a>
    ...
    <li><a href="..."><img src="..." alt=""></a>
</ul> */
}

// The Event Capture Phase
el.addEventListener('click', listener, true)


// The Event Bubbling Phase
el.addEventListener('click', listener, false) // listener doesn't capture
el.addEventListener('click', listener) // listener doesn't capture


// Stopping Propagation
window.addEventListener('click', e => { e.stopPropagation(); }, true);
window.addEventListener('click', listener('c1'), true);
window.addEventListener('click', listener('c2'), true);
window.addEventListener('click', listener('b1'));
window.addEventListener('click', listener('b2'));


// Stopping Immediate Propagation
window.addEventListener('click', e => { e.stopImmediatePropagation(); }, true);
window.addEventListener('click', listener('c1'), true);
window.addEventListener('click', listener('c2'), true);
window.addEventListener('click', listener('b1'));
window.addEventListener('click', listener('b2'));