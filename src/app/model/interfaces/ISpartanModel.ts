/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

interface ISpartanModel extends mongoose.Document {
  folk: string;
    amountPeopleKilled: number;
    name: string;
}

export = ISpartanModel;