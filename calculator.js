const express = require('express');
const ExpressError = require('./expressError');
const { mean, median, mode } = require('./operations');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', (req, res, next) => {
   try {
      const { nums } = req.query;
      let numArray = nums.split(',').map(num => Number(num));
      if (numArray.includes(NaN)) {
         throw new ExpressError("Only numbers are allowed", 400);
      }
      return res.json({
         response: {
            operation: "mean",
            value: mean(numArray)
         }
      })
   } catch(e) {
      next(e);
   }   
})

app.get('/median', (req, res, next) => {
   try {
      const { nums } = req.query;
      let numArray = nums.split(',').map(num => Number(num));
      numArray.sort((a, b) => a - b);
      console.log(numArray)
      if (numArray.includes(NaN)) {
         throw new ExpressError("Only numbers are allowed", 400);
      }
      return res.json({
         response: {
            operation: "median",
            value: median(numArray)
         }
      })
   } catch(e) {
      next(e);
   }
})

app.get('/mode', (req, res, next) => {
   try {
      const { nums } = req.query;
      let numArray = nums.split(',').map(num => Number(num));
      if (numArray.includes(NaN)) {
         throw new ExpressError("Only numbers are allowed", 400);
      }
      return res.json({
         response: {
            operation: "mode",
            value: mode(numArray)
         }
      })
   } catch(e) {

   }
})

app.use((error, req, res, next) => {
   res.json({
      error: error.message,
      status: error.status
   })
})

app.listen(3000, function () {
   console.log('Server started on port 3000');
})