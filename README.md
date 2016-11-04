#A Node-RED node to do circadian lighting levels

##Install

`npm install node-red-contrib-circadian-light`

##Usage

You set your lat/lon and the reporting interval then the node outputs a message 
with the current possition of the sun and it's % of daily hight:

```
{
  "azimuth": 0.36900883056765676, 
  "altitude": 0.36796818774968365, 
  "percent": 89.8566247170534 
}
```