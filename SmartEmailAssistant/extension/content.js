alert("Email Writer loaded successfully");

function injectButton(){

}

const observer = new MutationObserver((mutations)=>{
    for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComponseElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE && (node.matches('.aDh, .btC, [role="dialog"]') 
            || node.querySelector('.aDg, [role="region"]'))
        );

        if(hasComponseElements){
            console.log("Compose window detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});