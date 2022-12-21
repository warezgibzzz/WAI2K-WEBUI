import { defineStore } from "pinia";

interface Doll {
  name: string;
  stars: number;
  type: string;
  id: string;
}

interface Map {
  name: string;
  type?: string;
  chapter?: number;
  number?: number;
}

interface LogisticMap {
  formattedString: string;
  chapter: number;
  chapterIndex: number;
  number: number;
}

interface MapClassifier {
  normal: Map[];
  emergency: Map[];
  night: Map[];
  campaign: Map[];
  event: Map[];
  logistics?: LogisticMap[];
}

interface Classifiers {
  logisticsReceiveModeList: string[];
  combatReportTypeList: string[];
  captureMethodList: string[];
  compressionModeList: string[];
  dolls: Doll[];
  combatSimData: string[];
  combatSimNeural: string[];
  combatSimCoalition: string[];
  maps: MapClassifier;
}

export const useClassifierStore = defineStore("classifiers", {
  state: (): Classifiers => ({
    logisticsReceiveModeList: [],
    combatReportTypeList: [],
    captureMethodList: [],
    compressionModeList: [],
    dolls: [],
    combatSimData: [],
    combatSimNeural: [],
    combatSimCoalition: [],
    maps: {
      normal: [],
      emergency: [],
      night: [],
      campaign: [],
      event: [],
      logistics: [],
    },
  }),
  actions: {
    async load() {
      const [result, maps] = await Promise.all([
        this.axios.get(this.$api + "/classifier"),
        this.axios.get(this.$api + "/classifier/maps"),
      ]);
      this.$patch(result.data);
      this.$patch({ maps: maps.data });
    },
  },
});
