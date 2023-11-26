export const locationData = [
  {
    locationId: 0,
    locationTextIdentifier: "laundry",
    locationName: "Laundry Room",
    isUnlocked: true,
    currentLocationState: 0,
    availableOptions: [
      {
        availableOptionId: 0,
        locationTextIdentifier: "work_laundry",
        name: "Work",
        currentlyDisabled: true,
      },
      {
        availableOptionId: 1,
        locationTextIdentifier: "talkTo_laundry",
        name: "Talk to a Coworker",
        currentlyDisabled: true,
      },
      {
        availableOptionId: 2,
        locationTextIdentifier: "explore_laundry",
        name: "Explore This Area",
        currentlyDisabled: false,
      },
      {
        availableOptionId: 3,
        locationTextIdentifier: "whereTo_laundry",
        name: "Explore Another Area",
        currentlyDisabled: true,
      },
    ],
    currentExploreFindings: [],
  },
  {
    locationId: 1,
    locationTextIdentifier: "laundryOffice",
    locationName: "Laundry Office",
    isUnlocked: true,
    currentLocationState: 0,
    availableOptions: [],
    currentExploreFindings: [],
  },
  {
    locationId: 2,
    locationTextIdentifier: "breakRoom",
    locationName: "Break Room",
    isUnlocked: false,
    currentLocationState: 0,
    availableOptions: [],
    currentExploreFindings: [],
  },
];

// export const availableOptionsEnum = [
//   {
//     id: 0,
//     locationTextIdentifier: "work_laundry",
//     name: "Work",
//   },
//   {
//     id: 1,
//     locationTextIdentifier: "talkTo_laundry",
//     name: "Talk to a Coworker",
//   },
//   {
//     id: 2,
//     locationTextIdentifier: "exploreHere_laundry",
//     name: "Explore This Area",
//   },
//   {
//     id: 3,
//     locationTextIdentifier: "whereTo_laundry",
//     name: "Explore Another Area",
//   },
// ];
