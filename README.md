# TF-Toxicity-REST

**A RESTful API for TensorFlow's Pre-Trained Toxicity Classifier**

## Description

This is a customizable [Nest.js](https://nestjs.com/) backend which runs TensorFlow's pre-trained [toxicity classifier](https://github.com/tensorflow/tfjs-models/tree/master/toxicity).

## Installation

```sh
npm install
```

## Usage

To run the server in development mode:

```sh
npm run start

# watch mode
npm run start:dev
```

## API

### `POST /api/classifier`

**Content-Type:** `application/json`

**Request Content:**

* `input` (`string | string[]`): must contain a string or an array of strings.

**Request Examples:**

```json
{
  "input": "You are such a <redacted>."
}
```