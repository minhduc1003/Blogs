import React from "react";
import Content from "../../components/childItems/Content";
import DayAndAuthor from "../../components/childItems/DayAndAuthor";
import TypeOfContent from "../../components/childItems/TypeOfContent";
import HomeTitle from "../../components/HomeTitle";
import NewestItem from "../../components/NewestItem";
const BlogDetail = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto mb-[50px]">
        <div className="flex justify-between items-center">
          <img
            className="w-[600px] h-[450px] object-cover"
            src="/1.png"
            alt=""
          />
          <div className="max-w-[450px] flex flex-col gap-[40px]">
            <TypeOfContent
              type={"Kiến thức"}
              color={"bg-[#F3EDFF]"}
            ></TypeOfContent>
            <Content size={"text-4xl"} color={"text-[#23BB86]"}></Content>
            <div className="flex items-center justify-between">
              <DayAndAuthor color></DayAndAuthor>
              <div>100 view</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[800px] mx-auto flex flex-col gap-[40px] mb-[50px]">
        <h3  className={"font-bold text-xl"}>Chương 1</h3>
        <p className="text-justify">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer precision alongside baby leeks. Crafting renders aromatic
          enjoyment, then slices taco. Minutes undisturbed cuisine lunch
          magnificent mustard curry. Juicy share baking sheet pork. Meals ramen
          rarities selection, raw pastries richness magnificent atmosphere.
          Sweet soften dinners, cover mustard infused skillet, Skewers on
          culinary experience. Juicy meatballs brisket slammin' baked shoulder.
          Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens.
          Wine technique snack skewers chuck excess. Oil heat slowly. slices
          natural delicious, set aside magic tbsp skillet, bay leaves brown
          centerpiece. fruit soften edges frond slices onion snack pork steem on
          wines excess technique cup; Cover smoker soy sauce fruit snack. Sweet
          one-dozen scrape delicious, non sheet raw crunch mustard. Minutes
          clever slotted tongs scrape, brown steem undisturbed rice. Food
          qualities braise chicken cuts bowl through slices butternut snack.
          Tender meat juicy dinners. One-pot low heat plenty of time adobo fat
          raw soften fruit. sweet renders bone-in marrow richness kitchen,
          fricassee basted pork shoulder. Delicious butternut squash hunk.
          Flavor centerpiece plate, delicious ribs bone-in meat, excess chef
          end. sweet effortlessly pork, low heat smoker soy sauce flavor meat,
          rice fruit fruit. Romantic fall-off-the-bone butternut chuck rice
          burgers.
        </p>
        <img className="w-full" src="/2.png" alt="" />
        <h3 className={"font-bold text-xl"}>Chương 2</h3>
        <p className="text-justify">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer precision alongside baby leeks. Crafting renders aromatic
          enjoyment, then slices taco. Minutes undisturbed cuisine lunch
          magnificent mustard curry. Juicy share baking sheet pork. Meals ramen
          rarities selection, raw pastries richness magnificent atmosphere.
          Sweet soften dinners, cover mustard infused skillet, Skewers on
          culinary experience.
        </p>
      </div>
      <div className="max-w-[1110px] mx-auto">
        <HomeTitle title={"Bài viết liên quan"}></HomeTitle>
        <div className="flex gap-8 mb-[50px]">
        <NewestItem overShow={"flex-col"} size={"w-full"} outSide={"bg-[#F3EDFF]"}></NewestItem>
        <NewestItem overShow={"flex-col"} size={"w-full"} outSide={"bg-[#F3EDFF]"}></NewestItem>
        <NewestItem overShow={"flex-col"} size={"w-full"} outSide={"bg-[#F3EDFF]"}></NewestItem>
        <NewestItem overShow={"flex-col"} size={"w-full"} outSide={"bg-[#F3EDFF]"}></NewestItem>
        
            
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
