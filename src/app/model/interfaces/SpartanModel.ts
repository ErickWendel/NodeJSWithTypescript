/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface SpartanModel extends mongoose.Document {
  folk: string;
    amountPeopleKilled: number;
    name: string;
}

export = SpartanModel;