   var regionViewer = client.getWidget("regionViewer");
   var dataObj = {
   "name": "region3",
   "ars_properties": {
      "convertedUrl": "../../docs/floorplanSample.png",
      "imageUrl": "../../docs/entranceSample.png"
   },
   "conversionSpecification": {
      "imageCoordinates": [
         {
            "x": 0,
            "y": 0
         },
         {
            "x": 1194,
            "y": 0
         },
         {
            "x": 1194,
            "y": 675
         },
         {
            "x": 0,
            "y": 675
         }
      ],
      "convertedCoordinates": [
         {
            "x": 499.068549311475,
            "y": 214.0758850300218
         },
         {
            "x": 495.7546811221558,
            "y": 117.97370753976433
         },
         {
            "x": 574.6247440279533,
            "y": 134.54304848636045
         },
         {
            "x": 575.950291303681,
            "y": 197.5065440834257
         }
      ]
   },
   "boundary": [
      {
         "x": 644.3443483417313,
         "y": 640.6518305861913
      },
      {
         "x": 35.07891867763007,
         "y": 657.2681604861214
      },
      {
         "x": 42.46395418871009,
         "y": 302.78645595428065
      },
      {
         "x": 618.4967240529513,
         "y": 203.08847655470043
      }
   ],
   "conversionOnly": false,
   "ars_modifiedAt": "2023-10-20T19:20:15.077Z",
   "ars_modifiedBy": "deploytooldevuser",
   "distance": {
      "points": [
         {
            "x": 298.5,
            "y": 337.5
         },
         {
            "x": 644.2849838627225,
            "y": 334.92592415085966
         }
      ],
      "distance": 23
   },
   "direction": {
      "direction": 10,
      "points": [
         {
            "x": 168.00433116366847,
            "y": 626.197961610037
         },
         {
            "x": 542.1957960282028,
            "y": 565.1054775505212
         }
      ]
   }
};
   regionViewer.boundValue = JSON.stringify(dataObj);