#  Nasa API request from localhost
  <p style="text-align: right; justify-content: sapce evenly;, line-height: 2.5">
  This app consists of two <b style="color:green;">nodejs</b> scripts. both setup a localhost in the router it can be accessed<br/> from any device typing the ip address followed by the port (mars rovers: 8080), (pic-of-day:3000) <br/> as long as its connected to the same wifi network as the computer its  deployed on. the api  <br/>key is  hidden in a .env file, you must sign up in <b><a href="https://api.nasa.gov"> NASA open APIs</a></b> and then   save that key inside <br/> a .env file as  `API_KEY`. I'm using raw node js, but you can use express or other framework to <br/>enhance it, if you enhance this contribute to this project, I will be updating this soon adding <br/> new feautures such as adding color to the photographs using AI trained <br/> with images of deserts. Happy Coding! 👨‍💻
<image src="https://raw.githubusercontent.com/markkdamm/localhost-nasa-api/main/fha.jpg" width='300' height=auto align="right" style="margin:0"/>
</p>


![My Skills](https://skills.thijs.gg/icons?i=html,js,nodejs,vscode)

## API Reference

#### Get all items

### Rover Cameras

```
  GET path: `mars-photos/api/v1/rovers/curiosity/photos?api_key=`
```

### Rover Cameras

<table> <thead> <tr> <th>Abbreviation</th> <th>Camera</th> <th class="markerBox">Curiosity</th> <th class="markerBox">Opportunity</th> <th class="markerBox">Spirit</th> </tr></thead> <tbody> <tr> <td>FHAZ</td><td>Front Hazard Avoidance Camera</td><td class="markerBox">✔</td><td class="markerBox">✔</td><td class="markerBox">✔</td></tr><tr> <td>RHAZ</td><td>Rear Hazard Avoidance Camera</td><td class="markerBox">✔</td><td class="markerBox">✔</td><td class="markerBox">✔</td></tr><tr> <td>MAST</td><td>Mast Camera</td><td class="markerBox">✔</td><td class="markerBox"></td><td class="markerBox"></td></tr><tr> <td>CHEMCAM</td><td>Chemistry and Camera Complex</td><td class="markerBox">✔</td><td class="markerBox"></td><td class="markerBox"></td></tr><tr> <td>MAHLI</td><td>Mars Hand Lens Imager</td><td class="markerBox">✔</td><td class="markerBox"></td><td class="markerBox"></td></tr><tr> <td>MARDI</td><td>Mars Descent Imager</td><td class="markerBox">✔</td><td class="markerBox"></td><td class="markerBox"></td></tr><tr> <td>NAVCAM</td><td>Navigation Camera</td><td class="markerBox">✔</td><td class="markerBox">✔</td><td class="markerBox">✔</td></tr><tr> <td>PANCAM</td><td>Panoramic Camera</td><td class="markerBox"></td><td class="markerBox">✔</td><td class="markerBox">✔</td></tr><tr> <td>MINITES</td><td>Miniature Thermal Emission Spectrometer (Mini-TES)</td><td class="markerBox"></td><td class="markerBox">✔</td><td class="markerBox">✔</td></tr></tbody> </table>

### Querying by Martian sol

<table> <thead> <tr> <th>Parameter</th> <th>Type</th> <th>Default</th> <th>Description</th> </tr></thead> <tbody> <tr> <td>sol</td><td>int</td><td>none</td><td>sol (ranges from 0 to max found in endpoint)</td></tr><tr> <td>camera</td><td>string</td><td>all</td><td>see table above for abbreviations</td></tr><tr> <td>page</td><td>int</td><td>1</td><td>25 items per page returned</td></tr><tr> <td>api_key</td><td>string</td><td>DEMO_KEY</td><td>api.nasa.gov key for expanded usage</td></tr></tbody> </table>

#### Get item

```
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`


## Authors
<p align="left">
◉ <a href="https://www.github.com/markkdamm">@markkdamm</a>
<a href="https://twitter.com/mark__damm" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="markkdamm" height="30" width="40" /></a>
<a href="https://instagram.com/markkdamm" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="markkdamm" height="30" width="40" /></a>
<a href="https://dev.to/markkdamm" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="markkdamm" height="30" width="40" /></a>
</p>


## Feedback

#### If you have any feedback, please reach out to us at admin@axesoftwareai.com

