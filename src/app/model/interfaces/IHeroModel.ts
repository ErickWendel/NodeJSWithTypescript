/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

interface IHeroModel extends mongoose.Document {
  power: string;
  amountPeopleSaved: number;
  name: string;
}

export = IHeroModel;