// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

let data = [];
const globalMessage = (message) => {
  data.push(message);
};

const validateData = (dataYangDibaca) => {
  if (dataYangDibaca.message !== undefined) {
    let validatedData = dataYangDibaca.message.split(" ");
    return validatedData[validatedData.length - 1];
  }

  if (dataYangDibaca[0].message !== undefined) {
    let validatedData = dataYangDibaca[0].message.split(" ");
    return validatedData[validatedData.length - 1];
  }

  if (dataYangDibaca[0].data.message !== undefined) {
    let validatedData = dataYangDibaca[0].data.message.split(" ");
    return validatedData[validatedData.length - 1];
  }
};

function bacaData(fnCallback) {
  fs.readFile(file1, "utf-8", (err, dataYangDibaca) => {
    if (err) {
      fnCallback(err, null);
    }
    globalMessage(validateData(JSON.parse(dataYangDibaca)));
    fs.readFile(file2, "utf-8", (err, dataYangDibaca) => {
      if (err) {
        fnCallback(err, null);
      }
      globalMessage(validateData(JSON.parse(dataYangDibaca)));
      fs.readFile(file3, "utf-8", (err, dataYangDibaca) => {
        if (err) {
          fnCallback(err, null);
        }
        globalMessage(validateData(JSON.parse(dataYangDibaca)));
        fnCallback(
          null,
          data.filter((e, i, s) => {
            return i === s.indexOf(e);
          })
        );
      });
    });
  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
