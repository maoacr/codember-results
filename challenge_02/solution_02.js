import { message } from "../challenge_01/message_01";

let code = message.split("");

function compiler(data) {
  let currentValue = 0;
  let finalValue = "";
  data.map((symbol) => {
    if (symbol === "#") {
      currentValue += 1;
    } else if (symbol === "@") {
      currentValue -= 1;
    } else if (symbol === "*") {
      currentValue *= currentValue;
    } else if (symbol === "&") {
      finalValue += currentValue;
    }
  });
  return finalValue;
}

compiler(code);
