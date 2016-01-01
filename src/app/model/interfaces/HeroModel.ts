/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface HeroModel extends mongoose.Document {
  power: string;
  amountPeopleSaved: number;
  name: string;
}

export = HeroModel;