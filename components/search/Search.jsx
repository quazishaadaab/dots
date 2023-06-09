import React from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import 'jquery'
import DataService from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
// jquery guidline: always do import $ from jquery and import jquery-ui-dist/jquery-ui
// always make the function in the top then call it in render. or else react children error will appear
import { payload } from "../../pages/home/[home]"

import { BASE_BACKEND, CANVAS_BACKEND } from "../../utils/deployments"
import { Photo } from "@mui/icons-material";

import { Input, Grid, Button } from "@nextui-org/react";

//roomid is used for invites
function Search({ searchtype, roomid }) {


  console.log('rooomid', roomid)
  const peerSearch = (event, ui) => {
    const peerdoc = {
      userid: payload?.userid,
      peerid: ui?.item?.id,
    };
    // need to add off(click).on(click) or else it will send multiple requests at the same time. we only want to send 
    // singular requests.

    $("#addbutton").off('click').on("click", () => {
      DataService.addPeers(peerdoc);
      console.log(peerdoc)

    });
    $("#deletebutton").off("click").on("click", () => {

      console.log(peerdoc)
      DataService.deletePeerById(peerdoc);
    });
    // only adds peer when button is clicked


  }

  // delete functionality doesnt work need to fix it


  //for invite we need to change it to send an email request , instead of just adding a user.
  //this way we dont even need to postUserInRoom, because once the link is clicked the user will enter room and automatically register
  const invite = (event, ui) => {
    const inviteDoc = {
      roomid: roomid,
      userid: ui?.item?.id,
      username: ui?.item?.username,
      userPhoto: ui?.item?.photoURL
    };
    // need to add off(click).on(click) or else it will send multiple requests at the same time. we only want to send 
    // singular requests.


    // change to send email.
    $("#addbutton").off('click').on("click", () => {
      DataService.postUsersInRoom(inviteDoc);
      console.log(inviteDoc)

    });
    // delete functionality doesnt work need to fix it

    $("#deletebutton").off("click").on("click", () => {

      console.log(inviteDoc)
      DataService.deleteUsersInRoom(inviteDoc);
    });
    // only adds peer when button is clicked

  }

  const action = () => {
    $(document).ready(function () {
      $("#usersearch").autocomplete({
        source: async function (request, response) {
          let data = await fetch(
            `${BASE_BACKEND}/search?term=${request.term}` || `http://localhost:8000/search?term=${request.term}`
          )
            .then((results) => results?.json())
            .then((results) =>
              results?.map((result) => {
                console.log(result)
                return {
                  label: result?.username,
                  value: result?.username,
                  id: result?.userid,
                  username: result?.username,
                  photoURL: result?.photoURL
                };
              })
            );
          response(data);
        },
        minLength: 2,
        autoFocus: true,
        select: function (event, ui) {

          if (searchtype === "peer") {
            peerSearch(event, ui)
          }

          else if (searchtype === "invite") {
            invite(event, ui)


          }

        },
      });
    });
  };


  return (
    <div>
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
        <link
          rel="stylesheet"
          href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css"
        />
        <link rel="stylesheet" href="/resources/demos/style.css" />
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

        {/*         
        <div className="ui-widget border-gray-100 rounded-3xl bg-gray-100 w-auto h-auto p-4">
          <label for="usersearch " className="font-black ">User Search</label>
          <br />
          <input id="usersearch" className="mb-3 mt-3 rounded-3xl text-center bg-gray-400 w-[80%] text-white" />
          <br/>
          <button type="submit"  className="text-base mr-3" id="addbutton">Add Peer</button>
          <button type="submit" className="" id="deletebutton">Delete Peer</button>
        </div>
      */}


        {searchtype == "invite" && (
          <div className="flex">

          <Grid>
            <div className="flex align-center items-center">
              <div className="">
                <Input
                id="usersearch"
                bordered
                labelLeft="search:"
                labelRight=""
                placeholder="any user"
                size="sm"
                width="700px"
                color="warning"

              /></div>
              <div className="flex mx-3 gap-2">  
              <Button type="submit" id="addbutton" flat color="success" size={"xs"} auto>
                Add Friend to Room
              </Button>
              
              {/* not working as of now */}

              {/* <Button type="submit" id="deletebutton" flat color="error" size={"xs"} auto>
                Delete Friend
              </Button> */}
              </div>
              

            </div>
          </Grid>
          </div>

        )}



        {searchtype == "peer" && (

          <Grid>
            <div className="flex align-center items-center">
              <div className=""><Input
                id="usersearch"
                bordered
                labelLeft="search:"
                labelRight=""
                placeholder="any user"
                size="sm"
                width="700px"
                color="warning"

              /></div>
              <div className="flex mx-3 gap-2">  
              <Button type="submit" id="addbutton" flat color="success" size={"xs"} auto>
                Add Friend
              </Button>
              <Button type="submit" id="deletebutton" flat color="error" size={"xs"} auto>
                Delete Friend
              </Button>
              </div>
              

            </div>
          </Grid>
        )}



        {action()}
      </body>
    </div>
  );
}

export default Search;
