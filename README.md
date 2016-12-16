#A Node-RED node to do circadian lighting levels

##Install

`npm install node-red-contrib-circadian-light`

##Usage

You set your lat/lon and the reporting interval then the node outputs a message 
with the current possition of the sun and it's % of daily maximum height:

```
{
  "azimuth": 0.36900883056765676, 
  "altitude": 0.36796818774968365, 
  "percent": 89.8566247170534 
}
```

Where `azimuth` is the position of the Sun in radians  (direction along the 
horizon, measured from south to west), e.g. 0 is south and Math.PI * 3/4 is 
northwest.

`altitude` is the height of the Sun above the horizon in radians. Where 0 is 
at the horizon and PI/2 is directly overhead.

`percent` is how close the Sun is to it's highest position of the day, so 0%
is at sun rise and 100% will be the highest point the sun reaches for the 
given position and day.
