# Project Setup and Run Guide

This guide walks you through the steps to set up and run the project in a development environment, ensuring adherence to best practices.

## Prerequisites

Make sure the following software is installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 20.9.0 or higher)
- [npm](https://www.npmjs.com/) (version 10.1.0 or higher)

## Clone the Repository

```bash
git clone https://github.com/Farazkhanbwn/requit-green-lime-lemonet
```

## Install Dependencies

Navigate to the project directory and install the dependencies using the following command:

```bash
npm install
```

## Run the Application

Start the development server with the following command:

```bash
npm run dev
```

This command initiates the development server. Open your browser and go to `http://localhost:3000` to access the application.

## Project Structure

The project is organized into distinct directories, each serving a specific purpose:

### Client Structure:

- **`shared/components`**: Essential components that are reused across the project reside here. These components contribute to a consistent and cohesive user interface.

- **`shared/ui`**: UI components that are shared across the project structure are located here. These components encapsulate visual elements to maintain a unified design.

- **`services`**: This directory houses services responsible for consuming APIs and handling data retrieval. These services enhance separation of concerns and facilitate clean, modular code.

- **`context`**: The `context` directory includes React context implementations, promoting state management and sharing data between components in an efficient manner.

## Contributing

We invite contributions from the community. Feel free to contribute by forking the repository, making improvements, and creating pull requests.

## License

This project is licensed under the [MIT License](LICENSE).