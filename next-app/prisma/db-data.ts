interface PriceObject {
  date: number;
  prices: RecordedPrice
}
interface RecordedPrice {
  tesco?: number;
  dunnes?: number;
  supervalu?: number;
}

interface SeedItem {
  name: string;
  URLs: {
    [K in keyof RecordedPrice]?: string;
  };
  recordedPrices: PriceObject[]
}

export const items: SeedItem[] = [
  {
    name: "19 Crimes Dark Red Wine",
    URLs: {
      tesco: "https://www.tesco.ie/groceries/en-IE/products/299531363",
      dunnes:
        "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/19-crimes-the-uprising-red-wine-750ml-100227693",
    },
    recordedPrices: [
      {
        date: 1649606246476,
        prices: {
          tesco: 15,
          dunnes: 15,
        },
      },
      {
        date: 1649634241029,
        prices: {
          tesco: 10,
          dunnes: 9,
        },
      },
      {
        date: 1649854804373,
        prices: {
          tesco: 10,
          dunnes: 9.6,
        },
      },
      {
        date: 1649941207979,
        prices: {
          tesco: 10,
          dunnes: 9.6,
        },
      },
      {
        date: 1650027611950,
        prices: {
          tesco: 10,
          dunnes: 9.6,
        },
      },
      {
        date: 1650114004532,
        prices: {
          tesco: 10,
          dunnes: 9.6,
        },
      },
      {
        date: 1650200403764,
        prices: {
          tesco: 10,
          dunnes: 9.6,
        },
      },
      {
        date: 1650286803819,
        prices: {
          tesco: 10,
          dunnes: 9.6,
        },
      },
      {
        date: 1650373205026,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650459603858,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650546006246,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650632404344,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650718804389,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650805203974,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650891605819,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1650978004193,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651064403812,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651150804821,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651237204173,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651323603669,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651410004000,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651496403740,
        prices: {
          tesco: 13,
          dunnes: 9.6,
        },
      },
      {
        date: 1651582805220,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1651669204226,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1651755604850,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1651842003892,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1651928404163,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652014804352,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652101203902,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652187603804,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652274003765,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652360404777,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652446803848,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652533204752,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652619605026,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652706004998,
        prices: {
          tesco: 13,
          dunnes: 12,
        },
      },
      {
        date: 1652792404962,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1652878804915,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1652965204876,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653051603812,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653138003595,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653224404887,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653310804572,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653397210081,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653483610780,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653570009110,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653656412253,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1653742807480,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1653829209875,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1653915606343,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654002006068,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654088405732,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654174812040,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654261206273,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654347608628,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654434013173,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654520407574,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1654606809429,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1654693209329,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1654779610914,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1654866007235,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1654952408625,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655038807273,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655125208897,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655211610668,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655298009980,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655384408331,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655470810357,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655557210007,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655643606115,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655730009441,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655816406623,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655902809787,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1655989205887,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656075609519,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656162007743,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656248409813,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656334808798,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656421209667,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656507607679,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656594006722,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656680405715,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656766808639,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656853206873,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1656939607788,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657026008470,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657112409126,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657198810966,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657285205635,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657371609704,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657458010682,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657544408638,
        prices: {
          tesco: 15,
          dunnes: 12,
        },
      },
      {
        date: 1657630809866,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1657717208552,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1657803609316,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1657890008614,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1657976411537,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1658062810507,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1658149206824,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1658235609776,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1658322008036,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1658408406811,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
      {
        date: 1658494810797,
        prices: {
          tesco: 15,
          dunnes: 9.6,
        },
      },
    ],
  },
  {
    name: "19 Crimes Red Wine",
    URLs: {
      tesco: "https://www.tesco.ie/groceries/en-IE/products/299531340",
      dunnes:
        "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/19-crimes-red-wine-750ml-100873366",
      supervalu: "https://shop.supervalu.ie/shopping/product/1531948000",
    },
    recordedPrices: [
      {
        date: 1649606247678,
        prices: {
          tesco: 15,
          dunnes: 15,
          supervalu: 15.5,
        },
      },
      {
        date: 1649634241980,
        prices: {
          tesco: 10,
          dunnes: 9,
          supervalu: 15.5,
        },
      },
      {
        date: 1649854808044,
        prices: {
          tesco: 10,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1649941211749,
        prices: {
          tesco: 10,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650027615694,
        prices: {
          tesco: 10,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650114008381,
        prices: {
          tesco: 10,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650200407513,
        prices: {
          tesco: 10,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650286807596,
        prices: {
          tesco: 10,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650373208754,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650459607518,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650546010003,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650632407906,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650718808109,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650805207560,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650891610086,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1650978007907,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1651064407440,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1651150808704,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1651237208786,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1651323607296,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1651410007919,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1651496407431,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1651582808900,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1651669207868,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1651755608636,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1651842007615,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1651928408018,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652014808002,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652101207611,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652187607524,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652274007389,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652360408795,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652446807446,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652533208492,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652619608850,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652706008715,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652792408690,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652878808785,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1652965208571,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653051607422,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653138007213,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653224408586,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653310808560,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653397207528,
        prices: {
          tesco: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653483609805,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653570011330,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653656409935,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1653742810918,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1653829207622,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1653915608742,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654002012164,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654088410306,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654174810938,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654261209657,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654347609838,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654434011063,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654520413169,
        prices: {
          tesco: 12,
          dunnes: 9.6,
          supervalu: 15.5,
        },
      },
      {
        date: 1654606810581,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1654693207146,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 15.5,
        },
      },
      {
        date: 1654779609832,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1654866006255,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1654952407679,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655038808389,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655125210877,
        prices: {
          tesco: 12,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655211607062,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655298008178,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655384406592,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655470807720,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655557208210,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655643607124,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655730010371,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655816407554,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655902810822,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1655989210587,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656075606736,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656162010568,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656248406964,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656334809824,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656421207854,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656507609611,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656594008574,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656680410562,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656766810610,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656853209784,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1656939608766,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657026004706,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657112405379,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657198807935,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657285209396,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657371610673,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657458009542,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657544407550,
        prices: {
          tesco: 15,
          dunnes: 12,
          supervalu: 10.5,
        },
      },
      {
        date: 1657630808033,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1657717209582,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1657803607475,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1657890010531,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1657976409002,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1658062809652,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1658149210593,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1658235607870,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1658322010998,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1658408410640,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
      {
        date: 1658494809021,
        prices: {
          tesco: 15,
          dunnes: 9.6,
          supervalu: 10.5,
        },
      },
    ],
  },
  {
    name: "Jack Daniel's 70cl",
    URLs: {
      tesco: "https://www.tesco.ie/groceries/en-IE/products/255248604",
      dunnes:
        "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/jack-daniels-tennessee-whiskey-70-cl-100672192",
      supervalu: "https://shop.supervalu.ie/shopping/product/1020340001",
    },
    recordedPrices: [
      {
        date: 1650114011662,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 28,
        },
      },
      {
        date: 1650200410931,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 28,
        },
      },
      {
        date: 1650286811068,
        prices: {
          tesco: 34,
          dunnes: 22.1,
          supervalu: 28,
        },
      },
      {
        date: 1650373212490,
        prices: {
          tesco: 22.5,
          dunnes: 34,
          supervalu: 28,
        },
      },
      {
        date: 1650459610474,
        prices: {
          tesco: 22.5,
          dunnes: 34,
          supervalu: 28,
        },
      },
      {
        date: 1650546013222,
        prices: {
          tesco: 22.5,
          dunnes: 34,
          supervalu: 25,
        },
      },
      {
        date: 1650632411900,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1650718811470,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1650805210707,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1650891613346,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1650978010894,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1651064410541,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1651150812003,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1651237212046,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1651323610429,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1651410011269,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1651496411112,
        prices: {
          tesco: 30,
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1651582812090,
        prices: {
          tesco: 30,
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1651669210872,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1651755612191,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1651842010911,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1651928411339,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1652014811467,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1652101210804,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1652187610920,
        prices: {
          tesco: 30,
          dunnes: 30,
          supervalu: 35,
        },
      },
      {
        date: 1652274010685,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652360412019,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652446810962,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652533215236,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652619612065,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652706011975,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652792411942,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652878812844,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1652965211922,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1653051610619,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1653138010880,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1653224411909,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1653310812109,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1653397213569,
        prices: {
          tesco: 30,
          dunnes: 27,
          supervalu: 35,
        },
      },
      {
        date: 1653483608461,
        prices: {
          tesco: 22.5,
          dunnes: 24,
          supervalu: 35,
        },
      },
      {
        date: 1653570012889,
        prices: {
          tesco: 22.5,
          dunnes: 24,
          supervalu: 35,
        },
      },
      {
        date: 1653656411311,
        prices: {
          dunnes: 24,
          supervalu: 35,
        },
      },
      {
        date: 1653742812129,
        prices: {
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1653829208919,
        prices: {
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1653915609904,
        prices: {
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1654002010900,
        prices: {
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1654088411389,
        prices: {
          dunnes: 22.5,
          supervalu: 35,
        },
      },
      {
        date: 1654174808743,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654261208623,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654347607650,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654434008811,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654520412003,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654606811629,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654693211488,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654779612052,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654866010621,
        prices: {
          tesco: 22.5,
          dunnes: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1654952410852,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655038811758,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655125208036,
        prices: {
          tesco: 22.5,
          supervalu: 36,
        },
      },
      {
        date: 1655211608872,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655298009107,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655384410275,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655470808603,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655557209078,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655643610809,
        prices: {
          tesco: 35,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655730005802,
        prices: {
          tesco: 35,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655816410418,
        prices: {
          tesco: 35,
          dunnes: 22.1,
          supervalu: 36,
        },
      },
      {
        date: 1655902808933,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1655989208737,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656075610434,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656162008708,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656248408858,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656334807904,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656421210584,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656507604799,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 36,
        },
      },
      {
        date: 1656594009505,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1656680408654,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1656766805822,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1656853210794,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1656939609704,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657026010409,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657112410945,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657198809948,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657285207462,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657371608813,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657458007663,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657544410568,
        prices: {
          tesco: 35,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657630807018,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657717210621,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657803608406,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657890007687,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1657976409944,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1658062807714,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1658149209630,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1658235608877,
        prices: {
          tesco: 30,
          dunnes: 27.5,
          supervalu: 28,
        },
      },
      {
        date: 1658322007153,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 28,
        },
      },
      {
        date: 1658408405815,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 28,
        },
      },
      {
        date: 1658494810008,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 28,
        },
      },
    ],
  },
  {
    name: "Jameson 70cl",
    URLs: {
      tesco: "https://www.tesco.ie/groceries/en-IE/products/256409920",
      dunnes:
        "https://www.dunnesstoresgrocery.com/sm/delivery/rsid/258/product/jameson-triple-distilled-irish-whiskey-700ml-100671200",
      supervalu: "https://shop.supervalu.ie/shopping/product/1012072003",
    },
    recordedPrices: [
      {
        date: 1650114014652,
        prices: {
          tesco: 23,
          dunnes: 22.1,
          supervalu: 22.1,
        },
      },
      {
        date: 1650200414180,
        prices: {
          tesco: 23,
          dunnes: 22.1,
          supervalu: 22.1,
        },
      },
      {
        date: 1650286814276,
        prices: {
          tesco: 28.5,
          dunnes: 22.1,
          supervalu: 22.1,
        },
      },
      {
        date: 1650373215639,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 22.1,
        },
      },
      {
        date: 1650459613593,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 22.1,
        },
      },
      {
        date: 1650546016655,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1650632414910,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1650718814612,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1650805213973,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1650891616500,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1650978013942,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1651064413737,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1651150815243,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1651237215545,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1651323613851,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1651410014466,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1651496414502,
        prices: {
          tesco: 28.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1651582816178,
        prices: {
          tesco: 28.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1651669214073,
        prices: {
          tesco: 28.5,
          dunnes: 28.5,
          supervalu: 31,
        },
      },
      {
        date: 1651755615533,
        prices: {
          tesco: 28.5,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1651842014372,
        prices: {
          tesco: 28.5,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1651928414404,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652014814755,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652101214192,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652187614492,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652274013856,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652360415106,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652446814285,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652533218218,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652619615165,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652706015144,
        prices: {
          tesco: 25,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652792415214,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652878816256,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 31,
        },
      },
      {
        date: 1652965215122,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 25,
        },
      },
      {
        date: 1653051613820,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 25,
        },
      },
      {
        date: 1653138014081,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 25,
        },
      },
      {
        date: 1653224415013,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 25,
        },
      },
      {
        date: 1653310815351,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 25,
        },
      },
      {
        date: 1653397211378,
        prices: {
          tesco: 27,
          dunnes: 25,
          supervalu: 25,
        },
      },
      {
        date: 1653483611831,
        prices: {
          tesco: 22.5,
          supervalu: 25,
        },
      },
      {
        date: 1653570010233,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1653656413285,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1653742809815,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1653829212355,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1653915612206,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654002009819,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654088412497,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654174806535,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654261211913,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654347612207,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654434012149,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654520410934,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654606808426,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654693208220,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1654779607704,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1654866011726,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1654952412024,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1655038810718,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1655125209879,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1655211607936,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1655298010905,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 31,
        },
      },
      {
        date: 1655384407522,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 23,
        },
      },
      {
        date: 1655470809536,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 23,
        },
      },
      {
        date: 1655557207220,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 23,
        },
      },
      {
        date: 1655643609912,
        prices: {
          tesco: 28.5,
          dunnes: 22.1,
          supervalu: 23,
        },
      },
      {
        date: 1655730008465,
        prices: {
          tesco: 28.5,
          dunnes: 22.1,
          supervalu: 23,
        },
      },
      {
        date: 1655816409486,
        prices: {
          tesco: 28.5,
          dunnes: 22.1,
          supervalu: 23,
        },
      },
      {
        date: 1655902808021,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 23,
        },
      },
      {
        date: 1655989209671,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656075608581,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656162009672,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656248410758,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656334810694,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656421208821,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656507610503,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 31,
        },
      },
      {
        date: 1656594010426,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1656680407769,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1656766809580,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1656853207882,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1656939610720,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657026009495,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657112410007,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657198808960,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657285210331,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657371606963,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657458008584,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657544409600,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657630810860,
        prices: {
          tesco: 28.5,
          dunnes: 28.5,
          supervalu: 25,
        },
      },
      {
        date: 1657717207691,
        prices: {
          tesco: 28.5,
          dunnes: 28.5,
          supervalu: 25,
        },
      },
      {
        date: 1657803610273,
        prices: {
          tesco: 27.5,
          dunnes: 28.5,
          supervalu: 25,
        },
      },
      {
        date: 1657890009591,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1657976407138,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1658062808694,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1658149208727,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1658235610757,
        prices: {
          tesco: 27.5,
          dunnes: 27.5,
          supervalu: 25,
        },
      },
      {
        date: 1658322009981,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1658408409653,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
      {
        date: 1658494808057,
        prices: {
          tesco: 22.5,
          dunnes: 22.1,
          supervalu: 25,
        },
      },
    ],
  },
];
