export const PVP = "PVP";
export const BATTLE_ARENA = "BATTLE_ARENA";
export const PVE = "PVE";
export const LEISURE = "LEISURE";

export const schedule = {
  "Demon Destruction and Gilding": {
    type: PVP,
    times: {
      1: {
        start: 11,
        end: 25,
      },
      4: {
        start: 11,
        end: 25,
      },
    },
  },
  "Demon Elimination": {
    type: PVE,
    times: {
      2: {
        start: 11,
        end: 25,
      },
      4: {
        start: 11,
        end: 25,
      },
    },
  },
  "Dragonsong Battle": {
    type: PVP,
    times: {
      2: {
        start: 20,
        end: 21,
      },
      5: {
        start: 20,
        end: 21,
      },
    },
  },
  "Land of Emerald Clouds": {
    type: BATTLE_ARENA,
    times: {
      0: {
        start: 13,
        end: 23,
      },
      1: {
        start: 18,
        end: 23,
      },
      3: {
        start: 18,
        end: 23,
      },
      5: {
        start: 18,
        end: 23,
      },
      6: {
        start: 13,
        end: 23,
      },
    },
  },
  "Realm of Truth: Explosive Escape": {
    type: LEISURE,
    times: {
      1: {
        start: 11,
        end: 25,
      },
      6: {
        start: 11,
        end: 25,
      },
    },
  },
  "Gold of the Four Seas Reward": {
    type: LEISURE,
    times: {
      0: {
        start: 18,
        end: 20,
      },
      6: {
        start: 18,
        end: 20,
      },
    },
  },
  "Return to the Shadow Realm": {
    type: LEISURE,
    times: {
      0: {
        start: 11,
        end: 25,
      },
      3: {
        start: 11,
        end: 25,
      },
    },
  },
};
