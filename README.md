<h1 align="center">
    <img alt="Icons made by Freepik" src="./assets/logo-mutant.png">
</h1>

<h1 align="center">Challenge</h1>
This code is a simple NodeJS API that loads some information from https://jsonplaceholder.typicode.com/users (all routes make a request to this API through a middleware) and display it in three different formats based on the routes selected.

Since this is a simple project and it does not require the use of databases to store client informations, any authentication is being used.

<p align="center">
  <a href="#rocket-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#notebook-api-documentation">API Documentation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Installation

Clone the repository

```bash
git clone https://github.com/giovanniantonaccio/mutant-challenge.git

```

Access project installation folder and run the following command to build a docker container and run it:

```bash
docker-compose up -d
```

After these steps the server must be available on http://localhost:8080.

Rename `.env.example` to `.env` and fill the informations.

To run without docker, NodeJS must be installed. Open a terminal on the project folder and run the following commands

Install the dependencies:

```bash
yarn
```

Run the following commands to run the server:

```bash
yarn dev
```

## :books: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Docker](https://www.docker.com/docker-community)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## :notebook: API Documentation

### 1. Websites

Returns a JSON containing id, name and website from all users.

```http
GET http://localhost:8080/websites
```

#### Success - Status Code 200

```javascript
[
  {
    id: 1,
    name: 'Leanne Graham',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    website: 'anastasia.net',
  },
];
```

#### Error - Status Code 400

```javascript
{
    "error": "API communication failed"
}
```

### 2. Users

Returns a JSON containing id, name, email and company from all users. Info will be displayed in alphabetical order, ascending or descending based on the query params. The info can be ordered by name, email or company name. If no param is passed, it is ordered by name ascending.

```http
GET http://localhost:8080/users?filter=name&order=asc
```

| Parameter | Type     | Description                                         | Possible Values            |
| :-------- | :------- | :-------------------------------------------------- | :------------------------- |
| `filter`  | `string` | **Optional**. Parameter that will be used to filter | (name \| email \| company) |
| `order`   | `string` | **Optional**. Ascending or descending               | (asc \| desc )             |

#### Success - Status Code 200

```javascript
[
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];
```

#### Error - Status Code 400

```javascript
{
    "error": "API communication failed"
}
```

### 3. Suites

Returns a JSON containing id, name and address from all users that contain 'Suite' in their address.

```http
GET http://localhost:8080/suites
```

#### Success - Status Code 200

```javascript
[
  {
    id: 2,
    name: 'Ervin Howell',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
  },
];
```

#### Error - Status Code 400

```javascript
{
    "error": "API communication failed"
}
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/giovanniantonaccio/meetapp/blob/master/LICENSE) for more information.

---

Made by Giovanni Antonaccio :wave: [Get in touch!](https://www.linkedin.com/in/giovanniantonaccio/)
