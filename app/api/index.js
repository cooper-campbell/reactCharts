import fetch from 'isomorphic-fetch';

const API_URL = 'http://127.0.0.1:3001';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export async function localRegister(user) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(user)
        };

        const url = API_URL + '/test/user/make';
        const response = await fetch(url, options);

        return await response.json();
    }
    catch(e) {
        throw e;
    }
}

export async function getPieChartData() {
    try {
        const options = {
            mode: 'cors',
            method: 'GET',
            headers: jsonHeaders,
        };

        const url = API_URL + '/cm/piechart';
        const response = await fetch(url, options);

        return await response.json();
    }
  catch(e) {
      throw e;
  }
}
