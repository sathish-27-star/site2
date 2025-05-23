function uToFloat(arg){
// arg stands for Argument
// 'argument' alias name is parameter
// 'arg' formal parameter has STRING data type- value
// 'rfv' for return float value
 var rfv=parseFloat(arg);
 rfv=isNaN(rfv) ? 0 :rfv;
 return rfv;


}
function uToInt(arg){
// arg stands for Argument
// 'argument' alias name is parameter
// 'arg' formal parameter has STRING data type- value
// 'rfv' for return float value
var rfv=parseInt(arg);
rfv=isNaN(rfv) ? 0 :rfv;
return rfv;
}

