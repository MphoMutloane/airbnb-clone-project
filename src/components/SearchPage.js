import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./layout/SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 August to 32 August . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult 
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
      location="Private room in the centre of London"
      title="Stay at this spacious Edwardian house"
      description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking space"
      star={4.73}
      price="R1100/night"
      total="R3300 total"
      />
      <SearchResult 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-1123582399291921365/original/759ba13d-1b7a-44e6-81fd-c84f115a401e.jpeg?im_w=720"
      location="Cabin in Hartebeespoort"
      title="Spasie 30 Harties"
      description="Free cancellation"
      star={4.5}
      price="R1976/night"
      total="R3952 total"
      />
      <SearchResult 
      img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1092490699029768430/original/f4e27f6f-3fa1-4f82-86b4-8e83cadb4003.jpeg?im_w=720"
      location="Home in Hartebeespoort"
      title="The Pecan Lake Guesthouse"
      description="5 beds"
      star={5.0}
      price="R8000/night"
      total="R16000 total"
      />
      <SearchResult 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-38875401/original/1c4e5606-bee9-4d73-99db-ff7344ce7980.jpeg?im_w=720"
      location="Nature lodge in Dullstroom, South Africa"
      title="The Mill Room at Valley of the Rainbow "
      description="Free Cancellation"
      star={4.33}
      price="R800/night"
      total="R1600 total"
      />
      <SearchResult 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-24888317/original/f906abc0-36ed-4e57-8e87-803d6ae03401.jpeg?im_w=720"
      location="Bus in Mombela"
      title="School Bus living in Nature"
      description="Free Cancellation"
      star={5.0}
      price="R1200/night"
      total="R2400 total"
      />
      <SearchResult 
      img="https://a0.muscache.com/im/pictures/7e5ea8c2-3c22-4659-8606-7d42d3b77039.jpg?im_w=720"
      location="Apartment in Westville, Durban"
      title="Jungle Oasis"
      description="Free Cancellation"
      star={5.0}
      price="R711/night"
      total="R1592 total"
      />
      <SearchResult 
      img="https://a0.muscache.com/im/pictures/miso/Hosting-39848068/original/b96c1894-ae0d-4953-a9f7-dbf0dae74802.jpeg?im_w=720"
      location="Farm stay in Luckhof"
      title="Mountain Lodge on a working farm"
      description="3 beds"
      star={4.63}
      price="R950/night"
      total="R1900 total"
      />
    </div>
  );
};

export default SearchPage;
