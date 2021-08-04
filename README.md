# Video App BSG

See this project live at [Netlify](https://video-app-bsg.netlify.app/).

## Some explanation about what I have done:)

1. I make an authentication api call to get token. It works ok on localhost but live at netlify I get request blocked by cors.

2. Once I get token I keep it in ref rof additionals request, but on netlify I just display fake data.

3. I'm authenticated but a call for mediaList is not working either on production and development. But it works perfectly fin in Postman. So I have copied received data from postman and created a file dat/mediaList.json

4. The third call for a video details works just in postman so I get ther a sample wideo src

5. I used shaka-player-react to play mpd file when you click button in card.
