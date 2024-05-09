const fs=require("fs")
function logReqRes(filename){
    return(req, res, next) => {
        const log = `${Date.now()}: ${req.method} ${req.url} ${
          req.ip
        } New Request Received\n`;
        fs.appendFile("log2.txt", log, (err, data) => {
          if (err) {
            console.error("Error appending to log file:", err);
          }
        });
        next();

      }
}
module.exports={logReqRes}