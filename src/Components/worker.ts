onmessage = function(message){
    console.log(message.data);
    for( let i=0; i<1000000000; i++){
      Math.random() + Math.random();
    }
    this.postMessage('finished')
}