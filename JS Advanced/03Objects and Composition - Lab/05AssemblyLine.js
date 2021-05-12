const assemblyLine = createAssemblyLine();



const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine(){

    const assemblyLine = {
        hasClima: function (obj) {
          obj.temp=21,
          obj.tempSettings=21,
          obj.adjustTemp=function(){
              if (this.temp<this.tempSettings) {
                  this.temp++;
              }
              if (this.temp>this.tempSettings) {
                this.temp--;
            }
          }
        },
        hasAudio: function (obj) {
            
            obj.currentTrack={ name:null, artist:null };          
            obj.nowPlaying = function(){
                if (obj.currentTrack!==null) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);   
                }                
            }
        },
        hasParktronic: function (obj) {
            obj.checkDistance = function (distance) {
                
               if (distance<0.1) {
                    console.log("Beep! Beep! Beep!");
               } 
               if (0.1 <= distance < 0.25 ) {
                    console.log("Beep! Beep!");
               }
               if (0.25 <= distance < 0.5 ) {
                    console.log("Beep!");
               }
               if (distance>=0.5) {
                console.log("");
               }
            }
        }
        
      };
    return assemblyLine;
}

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);



assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

