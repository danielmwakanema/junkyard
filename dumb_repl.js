const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MISSING_CMD_ERROR = 'Be pretty cool if you typed something!'

/**
 * Evaluates strings of code from the cli
 * @param {String} statement
 * @return {any}
 */
const evaluator = statement => eval(statement);

const promiseR = query =>
  new Promise((resolve, reject) => {
    reader.question(`${query}`, answer => {
      if (answer.length === 0) reject(new Error(MISSING_CMD_ERROR));
      resolve(answer)
    });
  });

const start = async () => {
  let line = 0
  while (true) {
    try {
      const response = await promiseR(`[${line}]: `);
      console.log(evaluator(response));
    } catch (e) {
      console.error(`Error at line ${line}: ${e.message}`);
    }
    line += 1
  }
};

start();