// created page of jet-description for private charter page

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const fleetData = [
    {
      id: 'falcon900_1',
      title: 'Falcon 900',
      wifi: true,
      seats: 8,
      flightNo: 'N168BF',
      desc:
        'The versatile, elegant Falcon 900 is a tri-engine, heavy jet offering the ultimate in passenger comfort for up to 14 passengers.  Configured with an aft stateroom and a forward and aft lavatory, the Falcon 900 is the ideal cruising jet, with the flight characteristics to land on smaller airfields and in mountainous conditions, helping you to reach your destination faster.',
      priceHeading:
        'What is the price charter this jet?  How does charter jet pricing compare to jet cards and fractional pricing?',
      priceDetails:
        'Average, nationwide Ajax Jet retail charter cost per occupied hour, Falcon 900: $11,000',
      flightSpecsHeading: 'How far can a Falcon 900 fly nonstop? ',
      flightSpecsDetails: [
        'Falcon 900 specifications, including cabin height, length, seating chart, and range are included in the chart',
        'Typical charter flights for a Falcon 900: London to Boston, Berrmuda to Los Angeles, Dallas to Hawaii, New York to Mexico City'
      ],
      quoteHeading:
        'Do you need a jet charter quote?   Let our charter specialists handle every detail of your private charter flight on one of our Falcon 50 super midsize jets. '
    },

    {
      id: 'falcon50_2',
      title: 'Falcon 50EX and Falcon 50',
      wifi: true,
      seats: 9,
      flightNo: 'N504JS',
      desc:
        'The Falcon 50, and Falcon 50EX, is a comfortable, nine-seat supermid jet with coast-to-coast range, and tremendous performance capabilities to land at short runways and high altitude airports.',
      priceHeading:
        'What is the price charter this jet?  How does charter jet pricing compare to jet cards and fractional pricing?',
      priceDetails:
        'Average, nationwide Ajax Jet retail charter cost per occupied hour, Falcon 50 / 50EX: $7,000',
      flightSpecsHeading: 'How far can a Falcon 50 fly nonstop?',
      flightSpecsDetails: [
        'Falcon 50 specifications, including cabin height, length, seating chart, and range are included in the chart',
        'Typical charter flights for a Falcon 50: Los Angeles to New York, Boston to Tortola, Anchorage to Denver, Miami to Aspen, Seattle to Maui'
      ],
      quoteHeading:
        'Do you need a jet charter quote?   Let our charter specialists handle every detail of your private charter flight on one of our Falcon 50 super midsize jets. '
    },
    {
      id: 'hawker800_3',
      title: 'Hawker 800XP',
      wifi: true,
      seats: 8,
      flightNo: 'N168BF',
      desc:
        '"Conference Room in the Sky" the Hawker 800XP is an elegant, midsize business jet, with comfortable seating for up to eight passengers.',
      priceHeading:
        'What is the price charter this jet?  How does charter jet pricing compare to jet cards and fractional pricing?',
      priceDetails:
        'Average, nationwide Ajax Jet retail charter cost per occupied hour, Hawker 800XP: $6,000',
      flightSpecsHeading: 'How far can a Hawker 800XP fly nonstop?',
      flightSpecsDetails: [
        'Hawker 800XP specifications, including cabin height, length, seating chart, and range are included in the chart',
        'Typical charter flights for a Hawker 800XP: New York to Palm Beach, Seattle to Cabo, Dallas to New Brunswick'
      ],
      quoteHeading:
        'Do you need a jet charter quote?   Let our charter specialists handle every detail of your private charter flight on one of our Hawker 800XP midsize jets.'
    }
  ];
  fleetData.forEach(fleet => {
    createPage({
      path: `/jet-description=${fleet.title}`,
      component: require.resolve(`./src/components/jetDescription.js`),
      context: { fleet }
    });
  });
  const aircraftData = [
    {
      title: 'Falcon 900',
      label: 'Nationwide, Floating Fleet ',
      desc:
        'The versatile, elegant Falcon 900 is a tri-engine, heavy jet offering the ultimate in passenger comfort for up to 14 passengers.  Configured with an aft stateroom and a forward and aft lavatory, the Falcon 900 is the ideal cruising jet, with the flight characteristics to land on smaller airfields and in mountainous conditions, helping you to reach your destination faster.',
      priceHeading:
        'What is the price charter this jet?  How does charter jet pricing compare to jet cards and fractional pricing?',
      priceDetails:
        'Average, nationwide Ajax Jet retail charter cost per occupied hour, Falcon 900: $11,000',
      flightSpecsHeading: 'How far can a Falcon 900 fly nonstop? ',
      flightSpecsDetails: [
        'Falcon 900 specifications, including cabin height, length, seating chart, and range are included in the chart',
        'Typical charter flights for a Falcon 900: London to Boston, Berrmuda to Los Angeles, Dallas to Hawaii, New York to Mexico City'
      ],
      quoteHeading:
        'Do you need a jet charter quote?   Let our charter specialists handle every detail of your private charter flight on one of our Falcon 50 super midsize jets. ',
      aircraftManagement:
        'Do you own a Falcon 900?  Partner with Ajax Jets to make your asset suit your lifestyle and financial objectives.',
      aircraftMaintenance:
        'Do you use Falcon 900 maintenance or repair services?   Ajax Jets specializes in Falcon maintenance services, parts, avionics, TFE engine leasing and maintenance, that will keep your asset airworthy and on budget.',
      aircraftAcquisition:
        'Put Ajax Jets’ vast experience in aircraft acquisition and management to use when evaluating a Falcon 900 for purchase.  Our private jet sales team is intricately familiar with the Falcon 900 model, market conditions, maintenance items, aircraft valuations and overall suitability into the Falcon 900 Charter Management program.  In addition, aircraft that are currently operating in the program are available for sale and turnkey management.'
    },
    {
      title: 'Falcon 50EX and Falcon 50',
      label: 'Nationwide, Floating Fleet ',
      desc:
        'The Falcon 50, and Falcon 50EX, is a comfortable, nine-seat supermid jet with coast-to-coast range, and tremendous performance capabilities to land at short runways and high altitude airports.',
      priceHeading:
        'What is the price charter this jet?  How does charter jet pricing compare to jet cards and fractional pricing?',
      priceDetails:
        'Average, nationwide Ajax Jet retail charter cost per occupied hour, Falcon 50 / 50EX: $7,000',
      flightSpecsHeading: 'How far can a Falcon 50 fly nonstop?',
      flightSpecsDetails: [
        'Falcon 50 specifications, including cabin height, length, seating chart, and range are included in the chart',
        'Typical charter flights for a Falcon 50: Los Angeles to New York, Boston to Tortola, Anchorage to Denver, Miami to Aspen, Seattle to Maui'
      ],
      quoteHeading:
        'Do you need a jet charter quote?   Let our charter specialists handle every detail of your private charter flight on one of our Falcon 50 super midsize jets. ',

      aircraftManagement:
        'Do you own a Falcon 50?  Partner with Ajax Jets to make your asset suit your lifestyle and financial objectives.',
      aircraftMaintenance:
        'Do you use Falcon 50 maintenance or repair services?   Ajax Jets specializes in Falcon maintenance services, parts, avionics, TFE 731 engine leasing and maintenance, that will keep your asset airworthy and on budget.',
      aircraftAcquisition:
        'Put Ajax Jets’ vast experience in aircraft acquisition and management to use when evaluating a Falcon 50 for purchase.  Our private jet sales team is intricately familiar with the Falcon 50 model, market conditions, maintenance items, aircraft valuations and overall suitability into the Falcon 50 charter program.  In addition, aircraft that are currently operating in the program are available for sale and turnkey management.'
    },

    {
      title: 'Hawker 800XP',
      label: 'Nationwide, Floating Fleet ',

      desc:
        '"Conference Room in the Sky" the Hawker 800XP is an elegant, midsize business jet, with comfortable seating for up to eight passengers.',
      priceHeading:
        'What is the price charter this jet?  How does charter jet pricing compare to jet cards and fractional pricing?',
      priceDetails:
        'Average, nationwide Ajax Jet retail charter cost per occupied hour, Hawker 800XP: $6,000',
      flightSpecsHeading: 'How far can a Hawker 800XP fly nonstop?',
      flightSpecsDetails: [
        'Hawker 800XP specifications, including cabin height, length, seating chart, and range are included in the chart',
        'Typical charter flights for a Hawker 800XP: New York to Palm Beach, Seattle to Cabo, Dallas to New Brunswick'
      ],
      quoteHeading:
        'Do you need a jet charter quote?   Let our charter specialists handle every detail of your private charter flight on one of our Hawker 800XP midsize jets.',
      aircraftManagement:
        'Do you own a Hawker 800XP?  Partner with Ajax Jets to make your asset suit your lifestyle and financial objectives.',
      aircraftMaintenance:
        'Do you use Hawker 800XP maintenance or repair services?   Ajax Jets specializes in Falcon maintenance services, parts, avionics, TFE engine leasing and maintenance, that will keep your asset airworthy and on budget. ',
      aircraftAcquisition:
        'Put Ajax Jets’ vast experience in aircraft acquisition and management to use when evaluating a Hawker 800XP for purchase.  Our private jet sales team is intricately familiar with the Hawker 800XP model, market conditions, maintenance items, aircraft valuations and overall suitability into the Hawker 800XP Charter Management program.  In addition, aircraft that are currently operating in the program are available for sale and turnkey management.'
    }
  ];
  aircraftData.forEach(aircraft => {
    createPage({
      path: `/aircraft-description=${aircraft.title}`,
      component: require.resolve(`./src/components/aircraftDescription.js`),
      context: { aircraft }
    });
  });
};
