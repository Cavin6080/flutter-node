#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { spawn, exec } from "node:child_process";

let playerName;

const sleep = (ms = 1500) => new Promise((r) => setTimeout(r, ms));

// #####################
// #####################
// ##### functions #####
// #####################
// #####################


//loading indicator
async function handleReturn(isCorrect) {
  const spinner = createSpinner("Wating...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: "Nice work" });
  } else {
    spinner.error({ text: "Game over" });
    process.exit(1);

  }
}

//will be print at the end
function processDone() {
  const msg = `Made    By    Cavin`;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  })

}



async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Running your scripts\n");
  await sleep();
  rainbowTitle.stop();
  // handleReturn(true);
}





// #########################
// #########################
// ##### functions exe #####
// #########################
// #########################

await welcome();

exec('flutter clean', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

exec('flutter pub get', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  sleep()
  processDone();
});





// ///first process
// const child = spawn('flutter clean', { shell: true });
// child.stdout.on('data', (data) => {
//   console.log(`${data}`);

// });

// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ///second process
// const childtwo = spawn('flutter pub get', { shell: true });
// childtwo.stdout.on('data', (data) => {
//   console.log(`${data}`);
// });

// childtwo.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// childtwo.on('close', (code) => {
//   processDone();
// });





























// ///first process
// const child = spawn('flutter --version', { shell: true });
// // const child = spawn('dir', ['D:\\Projects'], {shell: true});
// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//   // console.log(`child process exited with code ${code}`);
//   processDone();

// });

