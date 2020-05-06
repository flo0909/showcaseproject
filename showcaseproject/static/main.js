/*functionality for item1*/
const images = [
    'img1.png',
    'img2.png',
    'img3.png'
    ]
    const item1Text = [
        'Improve your web appearance, unleash your potential!',
        'Have a personalized website to suit your needs!',
        'Save time and let the technology speak for you!',
    ]
    let counter = 0;
        document.getElementById('caret-left').addEventListener('click', function () {
    
            if(counter < images.length){
                counter++;
               
            }
            if(counter === images.length){
                counter = 0;
            }
            document.getElementById('item1').style.backgroundImage = `url( '/static/img/${images[counter]}' )`;
            document.getElementById('item1-text').innerHTML = `${item1Text[counter]}`;
          
          });
          document.getElementById('caret-right').addEventListener('click', function () {
            if(counter < images.length){
                counter++;
                
            }
            if(counter === images.length){
                counter = 0;
            }
            document.getElementById('item1').style.backgroundImage = `url( '/static/img/${images[counter]}' )`;
            document.getElementById('item1-text').innerHTML = `${item1Text[counter]}`;
          
          });


/*functionality for item4*/
          const projects = [
            'project1.png',
            'project2.png',
            'project3.png',
        ]
        const cardText = [
            'A memory game using JavaScript inspired by "Simon Game"',
            'An app for storing cooking recipes, using Python, Flask and MongoDB',
            'A blog/E-commerce app  "Issue Tracker" using Python, Django, PostgreSQL',
        ]
        const links =  [
            "https://flo0909.github.io/memory-game/",
            "https://flaskmongoproject.herokuapp.com/",
            "https://djangoprj1.herokuapp.com/"
        ]
        function myFunction() {
            let counter2 = 0;
    
            setInterval(function(){ 
                if(counter2<projects.length - 1){
                counter2++  ;
                
                } else{
                    counter2 = 0;
                } 
           document.getElementById('card-link').style.background = `url( '/static/img/${projects[counter2 ]}' )`;
           document.getElementById('card-link').style.backgroundPosition = `center`
           document.getElementById('card-link').style.backgroundSize = `cover`
           
           document.getElementById('card-link').style.backgroundRepeat = `no-repeat`
           document.getElementById('card-text').innerHTML = `${cardText[counter2]}`
           document.getElementById("card-link").href = `${links[counter2]}`
    
        }, 5000);
          }
          myFunction()