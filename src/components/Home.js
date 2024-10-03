import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import { listListing } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map(listing =>( <Card
            src={listing.img}
            title={listing.title}
            description={listing.description}
            price={listing.price}
          />))}
         
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=1440&im_q=highq"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=1440&im_q=highq"
          title="Unique Stays"
          description="Space that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-970124948854173594/original/82dff0c8-931f-423c-be40-31bef53b9011.jpeg?im_w=720"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div> */}
      {/* // <div className="home_section">
      //   <Card
      //     src="https://a0.muscache.com/im/pictures/hosting/Hosting-1209381183343777017/original/18c9b2b2-b55d-4bbe-9f26-bff7f881e4f0.jpeg?im_w=720"
      //     title="Apartment in Cape Town"
      //     description="Unique activities we can do together, led by a world of hosts."
      //     price="R2450/night"
      //   />
      //   <Card
      //     src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NjQ1ODc1NzMwMTkzODI5MQ%3D%3D/original/221c0352-5897-4f47-beef-08678c1a954c.jpeg?im_w=720"
      //     title="Condo in Cape Town"
      //     description="Green Point- The Green Park Suite."
      //     price="R1200/night"
      //   />
      //   <Card
      //     src="https://a0.muscache.com/im/pictures/a50fea9d-7688-4137-a6ec-cbdaa115b135.jpg?im_w=720"
      //     title="Treehouse in Hartbeespoort"
      //     description="Unique Treehouse in East Harties."
      //     price="R879/night"
      //   />
      //   <Card
      //     src="https://a0.muscache.com/im/pictures/miso/Hosting-875054391813973669/original/0253dc27-c6e5-4557-8362-c672324094a0.jpeg?im_w=720"
      //     title="Home in Randburg"
      //     description="Poolside Villa."
      //     price="R960/night"
      //   />
      // </div> */}
    </div>
  );
};

export default Home;
