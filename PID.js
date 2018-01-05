// Change these!
const P = 0.0
const I = 0.0
const D = 0.0
// Change anything below at your own risk!

var i_term = 0.0
var prev_time = 0.0

function controlFunction(block) {
  var delta_t = block.T - prev_time
  prev_time = block.T
  i_term = i_term + block.x * delta_t
  
  var PID_val = P*(-block.x) + I*(-i_term) - D*block.dx
  
  var added_friction = Math.min(0.2, Math.abs(PID_val))
  
  var sign = Math.sign(block.dx)
  if (sign !== -1 && sign !== 1) sign = Math.sign(PID_val)
  return PID_val - sign*added_friction
}
