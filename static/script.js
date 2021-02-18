
console.log("Kilroy was here.")
window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('Mine').addEventListener('click', () => {
        // Everything you want to do when button is clicked below
        console.log('Button was clicked!'); // console.log is like printing in JS!
        const userText = document.getElementById('PUT_INPUT_ID_HERE').value;
        //console.log(userText);
        
        //alert(userText)
        const url = '/search/' + userText; // This should remind you of APIs in Python!
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
        .then(data => { // .then will only run the function *once* the data is fetched from the internet
        console.log(data['headlines']); // See what this logs!
        var container = document.getElementById('init_arts');
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        var i;
        for (i=0; i<data['headlines'].length; i++){
            console.log(i)
            const newDiv = document.createElement('div');
            newDiv.innerHTML = "<p><b>"+data['headlines'][i]+"</b></p><p>"+data['snippets'][i]+"</p>";
            container.insertBefore(newDiv,container.firstChild);
        }
    });
    });
};

