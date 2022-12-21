import {defineStore} from "pinia";

interface ScriptConfig {
  loopDelay: number;
  baseNavigationDelay: number;
  mouseDelay: number;
  defaultSimilarityThreshold: number;
  mapRunnerSimilarityThreshold: number;
  ocrThreshold: number;
  maxPostBattleClicks: number;
  idleAtHome: boolean;
}

interface GameRestartConfig {
  enabled: boolean;
  averageDelay: number;
  delayCoefficientThreshold: number;
  maxRestarts: number;
}

interface NotificationsConfig {
  onRestart: boolean;
  onStopCondition: boolean;
}

interface Config {
  current_profile: string;
  clear_console_on_start: boolean;
  show_console_on_start: boolean;
  debug_mode_enabled: boolean;
  capture_method: string;
  capture_compression_mode: string;
  last_device_serial: string;
  script_config: ScriptConfig;
  game_restart_config: GameRestartConfig;
  api_key: string;
  notifications_config: NotificationsConfig;
}

export const useConfigStore = defineStore("config", {
  state: (): Config => ({
    current_profile: "",
    clear_console_on_start: false,
    show_console_on_start: false,
    debug_mode_enabled: false,
    capture_method: "",
    capture_compression_mode: "",
    last_device_serial: "",
    script_config: {
      loopDelay: 0,
      baseNavigationDelay: 0,
      mouseDelay: 0,
      defaultSimilarityThreshold: 0,
      mapRunnerSimilarityThreshold: 0,
      ocrThreshold: 0,
      maxPostBattleClicks: 0,
      idleAtHome: false,
    },
    game_restart_config: {
      enabled: false,
      averageDelay: 0,
      delayCoefficientThreshold: 0,
      maxRestarts: 0,
    },
    api_key: "",
    notifications_config: {
      onRestart: false,
      onStopCondition: false,
    },
  }),
  actions: {},
  getters: {},
});
