"use strict";

const express = require("express");

const { createLiveReloadHandler } = require("lively-cli");

const server = express(), ///
      staticRouter = express.static("./static"),
      liveReloadHandler = createLiveReloadHandler("./static/lib/example.js");

server.use(staticRouter);

server.get("/live-reload", liveReloadHandler);

server.listen(8888);
