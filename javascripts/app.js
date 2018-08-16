// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x : 0,
  y : 0,
  travelLog: []
}
// ======================


function turnLeft(rover){
  console.log("turnLeft was called!");

  if (rover.direction === "N"){
    rover.direction = "W";
  } else if (rover.direction === "E"){
    rover.direction = "N";
  } else if (rover.direction === "S"){
    rover.direction = "E";
  } else if (rover.direction === "W"){
    rover.direction = "S";
  } else {console.log("Position Error");}
  console.log(rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");

  if (rover.direction === "N"){
    rover.direction = "E";
  } else if (rover.direction === "E"){
    rover.direction = "S";
  } else if (rover.direction === "S"){
    rover.direction = "W";
  } else if (rover.direction === "W"){
    rover.direction = "N";
  } else {console.log("Position Error");}
  console.log(rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");

  //NORTH
  if (rover.direction == "N"){
    if (rover.x > 0){
      var oldx = rover.x;
      rover.x -= 1;
      console.log("Rover moved");
      rover.travelLog.push([[oldx, rover.y]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }

  //SOUTH
  if (rover.direction == "S"){
    if (rover.x < 9){
      var oldx = rover.x;
      rover.x += 1;
      console.log("Rover moved");
      rover.travelLog.push([[oldx, rover.y]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }

  // EAST
  if (rover.direction == "E"){
    if (rover.y < 9){
      var oldy = rover.y;
      rover.y += 1;
      console.log("Rover moved");
      rover.travelLog.push([[rover.x, oldy]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }

  //WEST
  if (rover.direction == "W"){
    if (rover.y > 0){
      var oldy = rover.y;
      rover.y -= 1;
      console.log("Rover moved");
      rover.travelLog.push([[rover.x, oldy]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");

  // FACED NORTH, MOVES SOUTH
  if (rover.direction == "N"){
    if (rover.x < 9){
      var oldx = rover.x;
      rover.x += 1;
      console.log("Rover moved backwards");
      rover.travelLog.push([[oldx, rover.y]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }

  // FACED SOUTH, MOVES NORTH
  if (rover.direction == "S"){
    if (rover.x > 0){
      var oldx = rover.x;
      rover.x -= 1;
      console.log("Rover moved backwards");
      rover.travelLog.push([[oldx, rover.y]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }

  //  FACED EAST, MOVES WEST
  if (rover.direction == "E"){
    if (rover.y > 0){
      var oldy = rover.y;
      rover.y -= 1;
      console.log("Rover moved backwards");
      rover.travelLog.push([[rover.x, oldy]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }

  // FACED WEST, MOVES EAST
  if (rover.direction == "W"){
    if (rover.y < 9){
      var oldy = rover.y;
      rover.y += 1;
      console.log("Rover moved backwards");
      rover.travelLog.push([[rover.x, oldy]]);
      console.log("New Position: (" + rover.x + "," + rover.y + ")");
    } else {
      console.log("Rover NOT moved: Limit reached.");
      console.log("Position: (" + rover.x + "," + rover.y + ")");

    }
  }
}

function commandList(commands){
  // VALIDATION
  for (var i = 0; i < commands.length; i++){
    var validCommands = "flrb";
    if(validCommands.indexOf(commands[i]) == -1){
      console.log ("Invalid command: " + commands[i] + '\n' + "List of commands:");
      console.log("f: move forward");
      console.log("b: move backward");
      console.log("r: turn right");
      console.log("l: turn left");
      return;
    }
  }

  for (var i = 0; i < commands.length; i++){
    
    if (commands[i] == "f"){
      moveForward(rover);
    }
    if (commands[i] == "l"){
      turnLeft(rover);
    }
    if (commands[i] == "r"){
      turnRight(rover);
    }
    if (commands[i] == "b"){
      moveBackward(rover);
    }

  }
   // Print Path
  console.log("Tracking:");
  rover.travelLog.forEach(function(elem){
  console.log("(" + elem[0] + "," + elem[1] + ")");
  });
  
}
