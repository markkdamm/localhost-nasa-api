#  Nasa API request from localhost
<p>
A brief description of what this project does and who it's for
<image src="./fha.jpeg" width='50%' height=auto />
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

