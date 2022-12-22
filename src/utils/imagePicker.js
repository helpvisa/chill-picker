// selects an image based on the option passed into it

const pickImage = (game, option) => {
  if (!game | !option) {
    return;
  }

  let img;
  // use a switch statement to select an image based on the object passed in
  switch (game) {
    case "Slice N' Dice":
      switch (option) {
        case "on Easy":
          img = "slice-easy.png";
          break;
        case "on Normal":
          img = "slice-normal.png";
          break;
        case "on Hard":
          img = "slice-hard.png";
          break;
        default:
          img = "slicendice.png";
          break;
      }
      break;
    case "Slay the Spire":
      switch (option) {
        case "as the Ironchad":
          img = "ironchad.png";
          break;
        case "as the Silent":
          img = "silent.png";
          break;
        case "as the Defect":
          img = "defect.png";
          break;
        case "as the Watcher":
          img = "watcher.png";
          break;
        case "the daily run":
          img = "slay.png";
          break;
        default:
          img = "slay.png";
          break;
      }
      break;
    case "Steam":
      img = "steam.png";
      break;
    case "Minecraft":
      img = "minecraft.png";
      break;
    case "Switch":
      img = "switch.png";
      break;
    case "Hunt: Showdown":
      img = "hunt.png";
      break;
    case "Tabletop Simulator":
      img = "tabletopsim.png"
      break;
    default:
      img = "alex.png";
      break;
  }

  // return our image string
  return img;
}

module.exports = { pickImage };
