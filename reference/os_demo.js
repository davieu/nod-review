const os = require('os');

////////// PLATFORM //////////////////////
console.log(os.platform());  //win32

//////////// CPU ARCITECTURE ///////////////////
console.log(os.arch()); //x64

//////////// CPU CORE INFO ///////////////
console.log(os.cpus()); //big object of the CPU cores //Intel(R) Core(TM) i7-3630QM CPU @ 2.40GHz

//////////// FREE MEMORY //////////////////
console.log(os.freemem()); //4460564480

//////////// FREE MEMORY //////////////////
console.log(os.totalmem()); //17127813120

//////////// HOME DIR /////////////////////
console.log(os.homedir()); //C:\Users\davis

///////////// UPTIME ///////////////////
console.log(os.uptime()); //3148181

///////////////OTHER METHODS //////////////////////

console.log(os); //BIG OBJECT OF SOME METHODS YOU CAN USE

console.log(os.hostname()); //DESKTOP-4TMIQ48

console.log(os.tmpdir()) //C:\Users\davis\AppData\Local\Temp

console.log(os.loadavg()) //[ 0, 0, 0 ]

console.log(os.networkInterfaces()) //OBJECT of wifi 

console.log(os.release()) //10.0.17134

console.log(os.type()) //Windows_NT

console.log(os.userInfo()) //object of data that relates to the pc.










