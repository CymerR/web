let dx     = 0,
    dy     = 0,
    ImpX   = 0,
    ImpY   = 0,
    AccX   = 0,
    AccY   = 0;

//method static
function ForceToVel(Force, mass) {
  ForceX = Force.x;
  ForceY = Force.y;

  Velocity.x = ForceX / mass;
  Velocity.y = ForceY / mass;

  return Velocity;
}
