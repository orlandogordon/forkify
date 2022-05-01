import { async } from 'regenerator-runtime';
import { TIMEOUT_SECONDS } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
/*
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/
export class Fractional {
  #floating;
  #floatingLength;
  #multiply;
  #gcd;
  #numerator;
  #denominator;
  #semplifyFraction;
  result;

  constructor(number) {
    this.number = number;
    this.result = this.#main(this.number);
    //`${this.result.#numerator}/${this.result.#denominator}`;
  }

  #main(number) {
    this.#isFloat(number)
      ? (this.#floating = number.toString().split('.')[1])
      : '';

    if (this.#floating) {
      this.#floatingLength = this.#floating.length;
      this.#multiply = 10 ** this.#floatingLength;
    } else return number;

    this.#gcd = this.#gcd_two_numbers(this.#multiply, number * this.#multiply);

    if (this.#gcd === 1) {
      this.#numerator = number * this.#multiply;
      this.#denominator = this.#multiply;
    } else {
      this.#numerator = (number * this.#multiply) / this.#gcd;
      this.#denominator = this.#multiply / this.#gcd;
    }

    return (this.#semplifyFraction = this.#semplifiedFraction(
      this.#numerator,
      this.#denominator
    ));
  }

  #semplifiedFraction(numerator, denominator) {
    const rest = numerator % denominator;
    if (rest === 0) return numerator / denominator;
    numerator = rest;
    return {
      numerator,
      denominator,
    };
  }

  #gcd_two_numbers(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  #isFloat(n) {
    const isFloat = Number(n) === n && n % 1 !== 0;
    return isFloat;
  }
}

Fractional.prototype.toString = function string() {
  const returnData =
    typeof this.result === 'object'
      ? `${this.result.numerator}/${this.result.denominator}`
      : `${this.result}`;
  return returnData;
};
