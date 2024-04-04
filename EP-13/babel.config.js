module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

// What is this preset ("@babel/preset-react")?
//  ans:- So the Bable is a transpiler, it's basically convert our code on form to another form.
// here the the -> "@babel/preset-react" is helping to convert the Jsx code into HTML so that read Properly,
