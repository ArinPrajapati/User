import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import toast from "react-hot-toast";
import { data } from "../helper/types";
//@ts-ignore
import imgload from "../assets/load.gif";

const UserCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState<data[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      console.log(res);
      setdata(res.data);
      setIsLoading(false);
      toast.success("Data fetched successfully");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h5 className="text-center mainHeading">Users</h5>
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ gap: "2rem", marginTop: "2rem" }}
      >
        {isLoading && (
          <p>
            <img
              style={{
                width: "10rem",
                marginInline: "auto",
                margin: "15rem",
                marginBottom: "45rem",
              }}
              src={imgload}
              alt=""
            />
          </p>
        )}
        {!isLoading &&
          data.map((item) => (
            <Card
              key={item.id}
              avatar={item.avatar}
              username={item.profile.username}
              firstName={item.profile.firstName}
              lastName={item.profile.lastName}
              email={item.profile.email}
              jobTitle={item.jobTitle}
              Bio={item.Bio}
            />
          ))}
      </div>
    </>
  );
};

export default UserCard;
