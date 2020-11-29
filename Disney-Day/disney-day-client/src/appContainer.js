class AppContainer {
   attractions = []
   categories = []
   url = "http://localhost:3000"
   yourDay = {}

   getAttractions() {
    // make a fetch request to /attractions
    console.log("something")
    fetch(this.url + '/attractions')
    .then(resp => resp.json())
    .then(data => console.log(data))
    // populate attraction and category properties with the returned data
    // call renderAttractions
    .catch(err => alert(err))
   }
   
   renderAttractions() {
       // create DOM nodes and insert data into them to render in the DOM 
   }


}