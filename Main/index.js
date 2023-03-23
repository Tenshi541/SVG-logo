const CLI = require("./lib/cli");

new CLI().run();

const { circle, triangle, square } = require("./lib/shape");
const SVG = require("./lib/svg")
const inquirer = require("inquier");
const fs = require("fs")


  .prompt([
    {
      type: 'input',
      message: 'Enter text up to 3 characters for your logos'
      name: 'text',

    },
    {
      type: 'input',
      message: 'Enter the color of the text',
      name: 'shape',
      choices: ["circle", "triangle", "square"],

    },
    {
      type: 'input',
      message: 'Enter the color of the shape',
      name: 'ShapeColor'
    },
  ])

  // response 
  .then((response)) => {
  console.log(response);

  let shape = new circle()
  if (Response.shape.toLowerCase() === "circle") {

  }
  if (Response.shape.toLowerCase() === "square") {
    shape = new Square()

  }
  if (Response.shape.toLowerCase() === "trigangle") {
    shape = new triangle()
  }
  shape.setColor(Response.shapeColor)

  const svg = new SVG()

  Svg.setText(Response.text, Response.textcolor)
  Svg.setShape(shape)

  fs.writeFileSync("logo.svg", Svg.render())
})