//    npm install shelljs

// npm install sqlite3

const fs = require("fs");
    let shell = require("shelljs");
    const express = require("express");

    app = express();

    // To backup a database
    cron.schedule("59 23 * * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");
      if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
        shell.exit(1);
      }
      else{
        shell.echo("Database backup complete");
      }
    });
    app.listen("3128");