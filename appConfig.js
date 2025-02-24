const falcon50N805DWExterior = require('./src/images/new-fleet-photos/Falcon-50-N805DW-Exterior.png');
const falcon50N805DWInterior = require('./src/images/new-fleet-photos/Falcon-50-N805DW-Interior.png');
const hawker800XPN168BFInterior = require('./src/images/new-fleet-photos/Hawker-800XP-N168BF-Interior.png');
const hawker800XPN887JSExterior = require('./src/images/new-fleet-photos/Hawker-800XP-N887JS-Exterior.png');
const falcon50Ext = require('./src/images/new-our-aircraft/Falcon-50EX-Exterior.png');
const falcon50Int = require('./src/images/new-our-aircraft/Falcon-50-Interior.png');
const falcon50Int2 = require('./src/images/new-our-aircraft/Falcon-50-Interior2.png');
const falcon50Specs = require('./src/images/new-our-aircraft/falcon-50-specifications-copy.png');
const falcon900Ext = require('./src/images/new-our-aircraft/Falcon-90-Exte.png');
const falcon900Ext2 = require('./src/images/new-our-aircraft/Falcon-900-Exterior.png');
const falcon900Int = require('./src/images/new-our-aircraft/Falcon-900-INte.png');
const falcon900Int2 = require('./src/images/new-our-aircraft/Falcon-900-Inter.png');
const falcon900Specs = require('./src/images/new-our-aircraft/Falcon-900-Seating-Chart.png');
const hawker800Ext = require('./src/images/new-our-aircraft/Hawker-800XP-Exterior.png');
const hawker800Int = require('./src/images/new-our-aircraft/Hawker-800XP-Interior2.png');
const hawker800Int2 = require('./src/images/new-our-aircraft/Hawker-800XP-N168BF-Interior.png');
const hawker800Specs = require('./src/images/new-our-aircraft/Hawker-800XP-Seating-Chart.png');

const falcon50BgImage = require('./src/images/bg-images/Falcon-50EX-Exterior.jpg');
const falcon900BgImage = require('./src/images/bg-images/Falcon-90-Exte.jpg');
const hawker800BgImage = require('./src/images/bg-images/Hawker-800XP-Exterior.jpg');

module.exports = {
  pageTitle: {
    home: 'homePageBackground',
    privateJets: 'privateJetsBackground',
    aircraftManagement: 'aircraftManagementBackground',
    contactUs: 'contactUsBackground',
    jetDescription: 'jetDescriptionBackground',
    ourAircraft: 'ourAircraftBackground',
    aboutUs: 'aboutUsBackground',
    aircraftDescription: 'aircraftDescriptionBackground',
    requestAQuote: 'requestAQuoteBackground'
  },
  privateJets: [
    {
      title: 'OUR AIRCRAFT',
      jets: [
        {
          img: falcon900Ext,
          title: 'Falcon 900',
          wifi: true,
          seats: 14,
          flightNo: 'N168BF'
        },
        {
          img: falcon50Ext,
          title: 'Falcon 50EX and Falcon 50',
          wifi: true,
          seats: 9,
          flightNo: 'N504JS'
        },
        {
          img: hawker800Ext,
          title: 'Hawker 800XP',
          wifi: true,
          seats: 8,
          flightNo: 'N168BF'
        }
      ]
    }
  ],
  aircraftManagement: [
    {
      title: 'OUR AIRCRAFT',
      jets: [
        {
          img: falcon900Ext,
          title: 'Falcon 900',
          wifi: true,
          seats: 14,
          flightNo: 'N168BF'
        },
        {
          img: falcon50Ext,
          title: 'Falcon 50EX and Falcon 50',
          wifi: true,
          seats: 9,
          flightNo: 'N504JS'
        },
        {
          img: hawker800Ext,
          title: 'Hawker 800XP',
          wifi: true,
          seats: 8,
          flightNo: 'N168BF'
        }
      ]
    }
  ],
  ourAircraft: [
    {
      title: 'Our Aircraft',
      jets: [
        {
          img: falcon900Ext,
          title: 'Falcon 900',

          desc:
            'The versatile, elegant Falcon 900 is a tri-engine, heavy jet offering the   '
        },
        {
          img: falcon50Ext,
          title: 'Falcon 50EX and Falcon 50',

          desc:
            'The Falcon 50, and Falcon 50EX, is a comfortable, nine-seat supermid '
        },

        {
          img: hawker800Ext,
          title: 'Hawker 800XP',

          desc:
            '"Conference Room in the Sky" the Hawker 800XP is an elegant, midsize  '
        }
      ]
    }
  ],

  jetImages: [
    {
      title: 'Falcon 50EX and Falcon 50',
      imgs: [falcon50N805DWExterior, falcon50N805DWInterior, falcon50Specs],
      bgImage: falcon50BgImage
    },
    {
      title: 'Falcon 900',
      imgs: [falcon900Ext2, falcon900Int2, falcon900Specs],
      bgImage: falcon900BgImage
    },
    {
      title: 'Hawker 800XP',
      imgs: [
        hawker800XPN887JSExterior,
        hawker800XPN168BFInterior,
        hawker800Specs
      ],
      bgImage: hawker800BgImage
    }
  ],
  aircraftImages: [
    {
      title: 'Falcon 50EX and Falcon 50',
      imgs: [falcon50Ext, falcon50Int, falcon50Int2, falcon50Specs],
      bgImage: falcon50BgImage
    },
    {
      title: 'Falcon 900',
      imgs: [falcon900Ext2, falcon900Int, falcon900Int2, falcon900Specs],
      bgImage: falcon900BgImage
    },
    {
      title: 'Hawker 800XP',
      imgs: [
        hawker800XPN887JSExterior,
        hawker800Int,
        hawker800Int2,
        hawker800Specs
      ],
      bgImage: hawker800BgImage
    }
  ],
  time: [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30'
  ],
  API_URL: 'https://ajaxjets.com/api/'
};
