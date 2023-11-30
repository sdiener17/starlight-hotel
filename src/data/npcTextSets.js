export const npcTextSets = [
  {
    textSetId: 0,
    textSet: [
      {
        subsetId: 0,
        text: `"Good morning Kira! We're glad to have you here in the laundry room with us. I know you haven't gotten much of a tour yet, but I'm sure Darla will take care of that."`,
        isPlayerResponse: false,
        playerResponseOptions: [],
        continuesImmediately: true,
      },
      {
        subsetId: 1,
        text: "We aren't running a small operation down here, in fact, we process over 70,000 pounds of laundry each week for our guests. We send it to the main hotel, and our multiple smaller beachside inns and restaurants.",
        isPlayerResponse: false,
        continuesImmediately: true,
      },
      {
        subsetId: 2,
        text: "",
        isPlayerResponse: true,
        continuesImmediately: true,
        playerResponseOptions: [
          {
            id: 0,
            text: `"That's a lot of laundry."`,
            npcRequiredResponseId: 3,
          },
          {
            id: 1,
            text: `"I'll have to stop complaining about having to do my laundry once a week."`,
            npcRequiredResponseId: 3,
          },
        ],
      },
      {
        subsetId: 3,
        text: "Tell me about it. I'm putting you with Darla for now. She's in charge of filling orders to our different locations. We get busy around this time of year, so I'm sure she'll keep you on your toes. Good luck!",
        includesPlayerResponse: false,
        playerResponseOptions: [],
      },
    ],
  },
  {
    textSetId: 1,
    textSet: [
      {
        subsetId: 0,
        text: "Well hello there, you must be Kira! They told me we were getting some new help.",
        isPlayerResponse: false,
        playerResponseOptions: [],
        continuesImmediately: true,
      },
      {
        subsetId: 1,
        text: "I'll give you a quick tour before we get started.",
        isPlayerResponse: false,
        playerResponseOptions: [],
        continuesImmediately: true,
      },
      {
        subsetId: 2,
        text: "",
        isPlayerResponse: true,
        playerResponseOptions: [
          {
            id: 0,
            text: `"That sounds great!"`,
            npcRequiredResponseId: 3,
          },
        ],
        continuesImmediately: true,
      },
    ],
  },
];
