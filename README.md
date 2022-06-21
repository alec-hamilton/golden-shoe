# golden-shoe

A website demo for GoldenShoe

## Description
GoldenShoe is a website demo built using a MySQL database, Node.js & React. 

## Getting Started
1. Clone this repo:

```bash
git clone git@github.com:alec-hamilton/golden-shoe.git
```

### Create the Database
2. Open a MySQL database management app (such as Sequel Ace or Sequel Pro).

3. Create a database called `golden-shoe` with login details that match the following:

```bash
username: root
password: password
```

4. Run the following SQL file to populate the database.

```bash
backend/db/golden-shoe_2022-06-15.sql
```

### Set Up the Backend
4. Open a terminal emulator (such as Terminal) and navigate to the backend directory, e.g.:

```bash
cd golden-shoe/backend

npm install
```

### Set Up the Frontend
5. Start a new terminal tab/window and navigate to the frontend directory, e.g.:

```bash
cd ../frontend

npm install
```

## Run the Application

### Run the Backend
1. In the terminal emulator, navigate into the backend directory. Start the backend app with:
```bash
node app.js
```

### Run the Frontend
2. In the terminal emulator, navigate into the frontend directory. Start the frontend app with:
```bash
npm start
```
3. The GoldenShoe page will be available at localhost:3000

## Terminating the Application

## Terminate the Backend and Frontend
Both apps can be stopped from the terminal emulator by pressing Control-C in their tabs.
