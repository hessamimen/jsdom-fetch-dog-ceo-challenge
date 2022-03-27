console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){

    function loadImgages(){
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        return fetch(imgUrl)
        .then(res => res.json())
        .then(json => {
            json.message.forEach(image => {
                const imgContainer = document.getElementById('dog-image-container');
                const dogImg = document.createElement('img');
                dogImg.src = image;
                imgContainer.append(dogImg);
            });
        });
    }
    loadImgages();
    //--------------------------challenge two-------------------------
    function loadBreedOptions(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all';
        return fetch(breedUrl)
        .then(res => res.json())
        .then(json =>{
            const dogBreed = document.getElementById('dog-breeds');
            Object.keys(json.message).forEach(breed =>{
                const breedList = document.createElement('li')
                breedList.innerHTML = breed
                dogBreed.appendChild(breedList)
    //--------------------------challenge Three-------------------------
    
                breedList.addEventListener('click', () => {
                    breedList.style.color = 'red';
                })
            })
        })
    
    }
    //--------------------------challenge four-------------------------
    
    loadBreedOptions().then(() => {
        const breedDrop = document.getElementById("breed-dropdown");
        let listOfDogs = document.querySelectorAll("#dog-breeds > li");
       
        breedDrop.addEventListener('change',(e) => {
          let filter = e.target.value;
     
          let filteredDogs = Array.from(listOfDogs)
            .filter(element => element.innerHTML[0] === filter);
     
          document.querySelector('#dog-breeds').innerHTML = "";
         
          filteredDogs.forEach(dog => {
            document.querySelector('#dog-breeds').append(dog);
          })
           
        })
      })

})


 