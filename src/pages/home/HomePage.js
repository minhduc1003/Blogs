import { signOut } from "firebase/auth";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import FeatureItems from "../../components/FeatureItems";
import HomeTitle from "../../components/HomeTitle";
import NewestItem from "../../components/NewestItem";
import NewestItems from "../../components/NewestItems";
import { db } from "../../fireBase-config";

const HomePage = () => {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      where("image","!=",""),
      limit(3)
    );
    onSnapshot(q, (snapshot) => {
      const hotData = [];

      for (let i = 0; i < snapshot.docs.length; i++) {
        hotData.push(snapshot.docs[i].data());
      }
      setFeature(hotData);
    });
  }, []);
  return (
    <div className="max-w-[1110px] mx-auto flex flex-col gap-[50px]">
      <Container></Container>
      <div className="Feature flex flex-col gap-[50px]">
        <div>
          <HomeTitle  title={"Feature"}></HomeTitle>
          <div className="flex gap-10">
            {feature.length > 0 &&
              feature.map((item, index) => (
                <FeatureItems
                  key={index}
                  data={item}
                ></FeatureItems>
              ))}
          </div>
        </div>
        <div>
          <HomeTitle title={"Newest update"}></HomeTitle>
          <NewestItems></NewestItems>
        </div>
        <div className="flex gap-8 ">
          <NewestItem
            overShow={"flex-col"}
            size={"w-full"}
            outSide={"bg-[#F3EDFF]"}
          ></NewestItem>
          <NewestItem
            overShow={"flex-col"}
            size={"w-full"}
            outSide={"bg-[#F3EDFF]"}
          ></NewestItem>
          <NewestItem
            overShow={"flex-col"}
            size={"w-full"}
            outSide={"bg-[#F3EDFF]"}
          ></NewestItem>
          <NewestItem
            overShow={"flex-col"}
            size={"w-full"}
            outSide={"bg-[#F3EDFF]"}
          ></NewestItem>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
