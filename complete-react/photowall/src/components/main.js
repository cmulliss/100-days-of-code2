import React, { Component } from "react";

import Title from "./title";
import PhotoWall from "./photo-wall";

// PhotoWall instance will pass in the array of posts as props
export default class Main extends Component {
  state = {
    posts: [
      {
        id: "0",
        description: "beautiful landscape",
        imageLink:
          "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg"
      },
      {
        id: "1",
        description: "Aliens???",
        imageLink:
          "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
          "08323785_735653395_n.jpg"
      },
      {
        id: "2",
        description: "On a vacation!",
        imageLink:
          "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }
    ]
  };
  removePhoto(postRemoved) {
    console.log(postRemoved.description);
  }

  render() {
    return (
      <div>
        <Title title={"PhotoWall"} />
        <PhotoWall posts={this.state.posts}
        onRemovePhoto={this.removePhoto} />
      </div>
    );
  }
}
/*
The main component is managing state, we added the array as a distinct piece of state of our component. Updating our array will trigger updates to page (re-render DOM). The photoWall accesses the updated array of state, passes it down as data and renders the updated photos.
The UI is just a fn of state, when you change state, UI updates accordingly. 
*/
