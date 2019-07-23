"use strict";

const PORT = 3000;
const express = require("express");
const app = express();
const fs = require('fs');
const formidableMiddleware = require('express-formidable');

app.use(express.static(__dirname + '/dist/formation-angular'));

const LEVEL_GRAND_ID = 2;
let children;

fs.readFile(__dirname + '/src/assets/data/children.json', (err, jsonString) => {
  if (err) {
    console.log("File read failed ", err)
    return
  }
  try {
    children = JSON.parse(jsonString);
    console.log('children fetched');
  } catch (err) {
    console.log('Error parsing Json file ', err);
  }
});

app.use(express.json());

app.get("/api/children", (req, res) => {
  res.send(JSON.stringify(children));
});

app.get("/api/children/:id", (req, res) => {
  const child = children.find(c => c.id === +req.params.id);
  res.send(JSON.stringify(child));
});

app.post("/api/children", (req, res) => {
  const newChild = req.body;
  const lastId = children.reduce((currentLastId, child) => {
    return currentLastId > child.id ? currentLastId : child.id;
  }, 0);

  newChild.id = lastId + 1;

  children.push(newChild);

  const newChildrenArray = JSON.stringify(children);
  updateJson(newChildrenArray);
});

app.put("/api/children/:id", (req, res) => {
  const index = children.findIndex(c => c.id === +req.params.id);
  if (index === -1) return res.sendStatus(400);
  const updatedChild = req.body;
  updatedChild.id = +updatedChild.id;
  children[index] = updatedChild;

  const newChildrenArray = JSON.stringify(children);
  updateJson(newChildrenArray);
});

app.delete("/api/children/:id", (req, res) => {
  const child = children.find(c => c.id === +req.params.id);
  if (!child) return res.sendStatus(400);
  children = children.filter(c => c.id !== +req.params.id);
  // Means it's a child specific config
  if (child.configId > LEVEL_GRAND_ID) {
    deleteConfig(child.configId);
  }
  res.send("{}");
  const newChildrenArray = JSON.stringify(children);
  updateJson(newChildrenArray);
});

function updateJson(data) {
  fs.writeFile(__dirname + '/src/assets/data/children.json', data, err => {
    if (err) {
      console.log('Error writing file ', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
}

let configs = [
  {
    id: 0,
    isAlphabeticOrder: true,
    isCursiveFont: false,
    isUpperCase: true,
    areMutedGraphemesDisplayed: true,
    areComplexGraphemesDisplayed: true,
    areComplexGraphemesGrouped: true,
    useAccents: false,
    filterWordsWithMutedGraphemes: true,
    filterWordsWithComplexGraphemes: true,
    filterWordsWithAccents: true
  },
  {
    id: 1,
    isAlphabeticOrder: false,
    isCursiveFont: false,
    isUpperCase: false,
    areMutedGraphemesDisplayed: true,
    areComplexGraphemesDisplayed: false,
    areComplexGraphemesGrouped: true,
    useAccents: true,
    filterWordsWithMutedGraphemes: false,
    filterWordsWithComplexGraphemes: false,
    filterWordsWithAccents: false
  },
  {
    id: 2,
    isAlphabeticOrder: false,
    isCursiveFont: true,
    isUpperCase: false,
    areMutedGraphemesDisplayed: false,
    areComplexGraphemesDisplayed: false,
    areComplexGraphemesGrouped: false,
    useAccents: true,
    filterWordsWithMutedGraphemes: false,
    filterWordsWithComplexGraphemes: false,
    filterWordsWithAccents: false
  }
];

app.get("/api/configs", (req, res) => {
  res.send(JSON.stringify(configs));
});

app.get("/api/configs/:id", (req, res) => {
  const conf = configs.find(c => c.id === +req.params.id);
  res.send(JSON.stringify(conf));
});

app.post("/api/configs", (req, res) => {
  const newConf = req.body;
  const lastId = configs.reduce((currentLastId, conf) => {
    return currentLastId > conf.id ? currentLastId : conf.id;
  }, 0);

  newConf.id = lastId + 1;
  configs.push(newConf);

  res.send(JSON.stringify(newConf));
});

app.put("/api/configs/:id", (req, res) => {
  const index = configs.findIndex(c => c.id === +req.params.id);
  if (index === -1) return res.sendStatus(400);
  const updatedConf = req.body;
  updatedConf.id = +updatedConf.id;
  configs[index] = updatedConf;
  res.send(JSON.stringify(updatedConf));
});

// Do not expose this to HTTP because it
// is only use en child deletion
function deleteConfig(configId) {
  configs = configs.filter(c => c.id !== configId);
}

app.use(formidableMiddleware({
  type: 'multipart'
}));

app.post("/api/img", (req, res) => {
  saveImg(req.files.image);
});

function saveImg(image) {
  let filename = __dirname + '/src/assets/img/' + image.name;
  let buildFilename = __dirname + '/dist/formation-angular/assets/img/' + image.name;
  let imageFile = fs.readFile(image.path, function (err, data) {
    fs.writeFile(filename, data, 'binary', err => {
      if (err) {
        console.log('Error writing file ', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
    fs.writeFile(buildFilename, data, 'binary', err => {
      if (err) {
        console.log('Error writing file ', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
  });
}

console.log(`Listen on port ${PORT}`);
app.listen(PORT);

