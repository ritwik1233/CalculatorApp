var express = require('express');
var PORT = process.env.PORT || 5000;
var app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(PORT, (err) => {
    if(err)
    {
        console.log("Server Error");
    }
    console.log("Server On Port No", PORT);
})