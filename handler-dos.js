
module.exports.mostrarConsola = async (event) => {
    console.log(JSON.stringify(event));

      let arr = event.detail.personas

      function mensaje() {
        for( i = 0; i < arr.length; i++){

        console.log(`Este es ${arr[i].nombre} y tiene ${arr[i].edad} años`)

        }
      }

      mensaje();
  };
