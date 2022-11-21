import axios, { AxiosResponse } from "axios";
import { ResponseDto } from "../types/ResponseDto";
import { useState } from "react";

export const useKeisyo = () => {
  const [b, setB] = useState([]);
  const [categoryAcceleration, setCategoryAcceleration] =
    useState<boolean>(false);
  const [categoryVelocity, setCategoryVelocity] = useState<boolean>(false);
  const [categoryRecovery, setCategoryRecovery] = useState<boolean>(false);
  const [categoryDebuff, setCategoryDebuff] = useState<boolean>(false);
  const [mileageFinalStage, setMileageFinalStage] = useState<boolean>(false);
  const [mileageFinal, setMileageFinal] = useState<boolean>(false);
  const [mileageMiddle, setMileageMiddle] = useState<boolean>(false);
  const [mileageOther, setMileageOther] = useState<boolean>(false);
  const [locationStraight, setLocationStraight] = useState<boolean>(false);
  const [locationCorner, setLocationCorner] = useState<boolean>(false);
  const [locationUnconditional, setLocationUnconditional] =
    useState<boolean>(false);

  const getFunc = async () => {
    await axios
      .get(
        "https://umakoyuu.microcms.io/api/v1/keisyo?filters=mileage[contains]最終",
        {
          headers: {
            "X-MICROCMS-API-KEY": "cc666066ab2d480dad1bb809bb2c2314fc79",
          },
          params: {
            limit: 100,
          },
        },
      )
      .then((res) => {
        setB(res.data.contents);
        console.log(res.data.contents);
      });
  };

  const switchCategoryAcceleration = () => {
    setCategoryAcceleration(!categoryAcceleration);
  };
  const switchCategoryVelocity = () => {
    setCategoryVelocity(!categoryVelocity);
  };
  const switchCategoryRecovery = () => {
    setCategoryRecovery(!categoryRecovery);
  };
  const switchCategoryDebuff = () => {
    setCategoryDebuff(!categoryDebuff);
  };

  return {
    getFunc,
    b,
    setB,
    categoryAcceleration,
    categoryVelocity,
    categoryRecovery,
    categoryDebuff,
    mileageFinalStage,
    mileageFinal,
    mileageMiddle,
    mileageOther,
    locationStraight,
    locationCorner,
    locationUnconditional,
    switchCategoryAcceleration,
    switchCategoryVelocity,
    switchCategoryRecovery,
    switchCategoryDebuff,
  } as const;
};
