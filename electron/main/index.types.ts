import type { MicaBrowserWindow } from "mica-electron";
export enum Environment {
  Development = "development",
  Production = "production",
}
export type AppContent = Record<Environment, (window: MicaBrowserWindow) => void>;
