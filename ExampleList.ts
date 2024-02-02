import { Coordinates } from "./Geo";

export type Route = {
  nodes: { coordinates: Coordinates }[];
  houses: { address: string; coordinates: Coordinates }[];
}[];

const exampleList: Route = [
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43987263040008,
          longitude: -79.91955398910629,
        },
      },
      {
        coordinates: {
          latitude: 40.43917207472256,
          longitude: -79.91949252919716,
        },
      },
    ],
    houses: [
      {
        address: "1637 SHADY AVE",
        coordinates: {
          latitude: 40.4392836394435,
          longitude: -79.918751781725,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.436817620872716,
          longitude: -79.91918647865133,
        },
      },
      {
        coordinates: {
          latitude: 40.43661977696976,
          longitude: -79.9191606544057,
        },
      },
    ],
    houses: [
      {
        address: "1814 SHADY AVE",
        coordinates: {
          latitude: 40.436600301133,
          longitude: -79.919416217914,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43623988998395,
          longitude: -79.91891345257453,
        },
      },
      {
        coordinates: {
          latitude: 40.43568663674771,
          longitude: -79.91651236472798,
        },
      },
    ],
    houses: [
      {
        address: "6301 BARTLETT ST",
        coordinates: {
          latitude: 40.4364812766702,
          longitude: -79.9189258229272,
        },
      },
      {
        address: "6306 BARTLETT ST",
        coordinates: {
          latitude: 40.4360368056482,
          longitude: -79.9187314978502,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43542373502071,
          longitude: -79.916398889307,
        },
      },
      {
        coordinates: {
          latitude: 40.435456338566084,
          longitude: -79.91639437538973,
        },
      },
    ],
    houses: [
      {
        address: "1901 MULHATTON ST",
        coordinates: {
          latitude: 40.4354072611327,
          longitude: -79.9161950931633,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.434743731215505,
          longitude: -79.9163381656701,
        },
      },
      {
        coordinates: {
          latitude: 40.4345386,
          longitude: -79.9139754,
        },
      },
      {
        coordinates: {
          latitude: 40.4345615,
          longitude: -79.9139028,
        },
      },
      {
        coordinates: {
          latitude: 40.4346162,
          longitude: -79.9138413,
        },
      },
      {
        coordinates: {
          latitude: 40.43526553263408,
          longitude: -79.91373382960923,
        },
      },
    ],
    houses: [
      {
        address: "6501 BEACON ST",
        coordinates: {
          latitude: 40.4349691826344,
          longitude: -79.9162015094984,
        },
      },
      {
        address: "6525 BEACON ST",
        coordinates: {
          latitude: 40.4349383229127,
          longitude: -79.9154893710987,
        },
      },
      {
        address: "6535 BEACON ST",
        coordinates: {
          latitude: 40.4348913408418,
          longitude: -79.9151245639174,
        },
      },
      {
        address: "6516 BEACON ST",
        coordinates: {
          latitude: 40.4344330686735,
          longitude: -79.9159593467298,
        },
      },
      {
        address: "6500 BEACON ST",
        coordinates: {
          latitude: 40.4344377014526,
          longitude: -79.9163860382176,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43535538880572,
          longitude: -79.91863456045313,
        },
      },
      {
        coordinates: {
          latitude: 40.4353226,
          longitude: -79.9184048,
        },
      },
      {
        coordinates: {
          latitude: 40.4352651,
          longitude: -79.9182301,
        },
      },
      {
        coordinates: {
          latitude: 40.4349986,
          longitude: -79.917761,
        },
      },
      {
        coordinates: {
          latitude: 40.4348771,
          longitude: -79.9174804,
        },
      },
      {
        coordinates: {
          latitude: 40.43477604256029,
          longitude: -79.91671198401215,
        },
      },
    ],
    houses: [
      {
        address: "6432 BEACON ST",
        coordinates: {
          latitude: 40.4344871078057,
          longitude: -79.9167530781107,
        },
      },
      {
        address: "6420 BEACON ST",
        coordinates: {
          latitude: 40.4345216297743,
          longitude: -79.9171085005629,
        },
      },
      {
        address: "6400 BEACON ST",
        coordinates: {
          latitude: 40.434665240349,
          longitude: -79.9177523906452,
        },
      },
      {
        address: "6413 BEACON ST",
        coordinates: {
          latitude: 40.4351961361462,
          longitude: -79.9174528618333,
        },
      },
      {
        address: "6403 BEACON ST",
        coordinates: {
          latitude: 40.4353693179359,
          longitude: -79.9177498577822,
        },
      },
      {
        address: "6401 BEACON ST",
        coordinates: {
          latitude: 40.4354484467471,
          longitude: -79.9178936252791,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43480857614937,
          longitude: -79.92244660635623,
        },
      },
      {
        coordinates: {
          latitude: 40.4348882,
          longitude: -79.9218988,
        },
      },
      {
        coordinates: {
          latitude: 40.4351402,
          longitude: -79.9201647,
        },
      },
      {
        coordinates: {
          latitude: 40.43528113307696,
          longitude: -79.91919546095198,
        },
      },
    ],
    houses: [
      {
        address: "5930 BEACON ST",
        coordinates: {
          latitude: 40.4349931669394,
          longitude: -79.9191237759394,
        },
      },
      {
        address: "5920 BEACON ST",
        coordinates: {
          latitude: 40.4349892592902,
          longitude: -79.9194635940396,
        },
      },
      {
        address: "5904 BEACON ST",
        coordinates: {
          latitude: 40.4349113453994,
          longitude: -79.92003029473,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43479087600948,
          longitude: -79.91885286034316,
        },
      },
      {
        coordinates: {
          latitude: 40.43481189605548,
          longitude: -79.91885857488495,
        },
      },
    ],
    houses: [
      {
        address: "2012 SHADY AVE",
        coordinates: {
          latitude: 40.4347739977278,
          longitude: -79.9190973249687,
        },
      },
      {
        address: "2014 SHADY AVE",
        coordinates: {
          latitude: 40.4347582540604,
          longitude: -79.9190583695046,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43377113469444,
          longitude: -79.92272422559807,
        },
      },
      {
        coordinates: {
          latitude: 40.434320879567494,
          longitude: -79.91889323633143,
        },
      },
    ],
    houses: [
      {
        address: "5931 HOBART ST",
        coordinates: {
          latitude: 40.4345010754781,
          longitude: -79.9190673492788,
        },
      },
      {
        address: "5873 HOBART ST",
        coordinates: {
          latitude: 40.4343696427499,
          longitude: -79.9202176972171,
        },
      },
      {
        address: "5853 HOBART ST",
        coordinates: {
          latitude: 40.434251120809,
          longitude: -79.9208995135379,
        },
      },
      {
        address: "5870 HOBART ST",
        coordinates: {
          latitude: 40.4338856387417,
          longitude: -79.9201985349062,
        },
      },
      {
        address: "5876 HOBART ST",
        coordinates: {
          latitude: 40.4339389801572,
          longitude: -79.9198876235755,
        },
      },
      {
        address: "5880 HOBART ST",
        coordinates: {
          latitude: 40.4339681744808,
          longitude: -79.9196197742468,
        },
      },
      {
        address: "5888 HOBART ST",
        coordinates: {
          latitude: 40.4340279824808,
          longitude: -79.919286071224,
        },
      },
      {
        address: "5894 HOBART ST",
        coordinates: {
          latitude: 40.4340654793646,
          longitude: -79.9190292685105,
        },
      },
      {
        address: "5898 HOBART ST",
        coordinates: {
          latitude: 40.4340679528564,
          longitude: -79.9188536299702,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.43283305973324,
          longitude: -79.92280713921875,
        },
      },
      {
        coordinates: {
          latitude: 40.43348996932393,
          longitude: -79.91869164652675,
        },
      },
    ],
    houses: [
      {
        address: "5929 DOUGLAS ST",
        coordinates: {
          latitude: 40.4336596338548,
          longitude: -79.9188397847743,
        },
      },
      {
        address: "5927 DOUGLAS ST",
        coordinates: {
          latitude: 40.4336453724585,
          longitude: -79.9189266466173,
        },
      },
      {
        address: "5905 DOUGLAS ST",
        coordinates: {
          latitude: 40.4335247716455,
          longitude: -79.9197341595472,
        },
      },
      {
        address: "5885 DOUGLAS ST",
        coordinates: {
          latitude: 40.4334986689106,
          longitude: -79.919969046834,
        },
      },
      {
        address: "5879 DOUGLAS ST",
        coordinates: {
          latitude: 40.4334756268862,
          longitude: -79.9201871429977,
        },
      },
      {
        address: "5867 DOUGLAS ST",
        coordinates: {
          latitude: 40.4334022512774,
          longitude: -79.9206289268598,
        },
      },
      {
        address: "5851 DOUGLAS ST",
        coordinates: {
          latitude: 40.4332868109756,
          longitude: -79.9212342921957,
        },
      },
      {
        address: "5847 DOUGLAS ST",
        coordinates: {
          latitude: 40.4332633611812,
          longitude: -79.9213424176856,
        },
      },
      {
        address: "5839 DOUGLAS ST",
        coordinates: {
          latitude: 40.4332414620248,
          longitude: -79.9216457130625,
        },
      },
      {
        address: "5827 DOUGLAS ST",
        coordinates: {
          latitude: 40.4331753041073,
          longitude: -79.9219953760986,
        },
      },
      {
        address: "5825 DOUGLAS ST",
        coordinates: {
          latitude: 40.4331563895024,
          longitude: -79.9221252062525,
        },
      },
      {
        address: "5844 DOUGLAS ST",
        coordinates: {
          latitude: 40.4328536833507,
          longitude: -79.9212839564421,
        },
      },
      {
        address: "5854 DOUGLAS ST",
        coordinates: {
          latitude: 40.4329089648115,
          longitude: -79.9209138214121,
        },
      },
      {
        address: "5856 DOUGLAS ST",
        coordinates: {
          latitude: 40.4329305468966,
          longitude: -79.9208027620418,
        },
      },
      {
        address: "5860 DOUGLAS ST",
        coordinates: {
          latitude: 40.4329692471715,
          longitude: -79.9206721302787,
        },
      },
      {
        address: "5884 DOUGLAS ST",
        coordinates: {
          latitude: 40.4331011348067,
          longitude: -79.9198926578857,
        },
      },
      {
        address: "5902 DOUGLAS ST",
        coordinates: {
          latitude: 40.4331178373906,
          longitude: -79.9197196345191,
        },
      },
      {
        address: "5908 DOUGLAS ST",
        coordinates: {
          latitude: 40.4331522683726,
          longitude: -79.9194652527265,
        },
      },
      {
        address: "5910 DOUGLAS ST",
        coordinates: {
          latitude: 40.4331757859889,
          longitude: -79.9193826421917,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.432420660596456,
          longitude: -79.91826677369502,
        },
      },
      {
        coordinates: {
          latitude: 40.433406934264866,
          longitude: -79.91849876469314,
        },
      },
    ],
    houses: [
      {
        address: "2200 SHADY AVE",
        coordinates: {
          latitude: 40.4333689646685,
          longitude: -79.9187751029898,
        },
      },
      {
        address: "2206 SHADY AVE",
        coordinates: {
          latitude: 40.4332107592927,
          longitude: -79.9187337241253,
        },
      },
    ],
  },
  {
    nodes: [
      {
        coordinates: {
          latitude: 40.433596002469926,
          longitude: -79.91781797883569,
        },
      },
      {
        coordinates: {
          latitude: 40.4337198,
          longitude: -79.9167135,
        },
      },
      {
        coordinates: {
          latitude: 40.4336059,
          longitude: -79.9152693,
        },
      },
      {
        coordinates: {
          latitude: 40.43351035304995,
          longitude: -79.91424901564015,
        },
      },
    ],
    houses: [
      {
        address: "6316 DOUGLAS ST",
        coordinates: {
          latitude: 40.4334226979311,
          longitude: -79.9177846937389,
        },
      },
      {
        address: "6324 DOUGLAS ST",
        coordinates: {
          latitude: 40.4334486450645,
          longitude: -79.9174700285357,
        },
      },
      {
        address: "6332 DOUGLAS ST",
        coordinates: {
          latitude: 40.433486638173,
          longitude: -79.9172157577518,
        },
      },
      {
        address: "6336 DOUGLAS ST",
        coordinates: {
          latitude: 40.433503693604,
          longitude: -79.9170970046104,
        },
      },
      {
        address: "6323 DOUGLAS ST",
        coordinates: {
          latitude: 40.4338723283142,
          longitude: -79.9176748085123,
        },
      },
    ],
  },
];

export { exampleList };
