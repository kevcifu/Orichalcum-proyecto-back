const express = require('express')
const mongoose = require('mongoose')
const conectarBD = require('../db/db');

const main = async () => {
    await conectarBD();

};

main();
