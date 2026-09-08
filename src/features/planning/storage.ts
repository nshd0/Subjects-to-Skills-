import { Unit } from '@/types';

const CUSTOM_UNITS_KEY = "planner_custom_units";

export function getCustomUnits(): Unit[] {
  try {
    const data = localStorage.getItem(CUSTOM_UNITS_KEY);
    if (!data) return [];
    return JSON.parse(data) as Unit[];
  } catch (error) {
    console.error("Failed to parse custom units from localStorage", error);
    return [];
  }
}

export function saveCustomUnit(unit: Unit): void {
  try {
    const units = getCustomUnits();
    units.push(unit);
    localStorage.setItem(CUSTOM_UNITS_KEY, JSON.stringify(units));
  } catch (error) {
    console.error("Failed to save custom unit", error);
  }
}

export function updateCustomUnit(updatedUnit: Unit): void {
  try {
    const units = getCustomUnits();
    const index = units.findIndex(u => u.id === updatedUnit.id);
    if (index !== -1) {
      units[index] = updatedUnit;
      localStorage.setItem(CUSTOM_UNITS_KEY, JSON.stringify(units));
    }
  } catch (error) {
    console.error("Failed to update custom unit", error);
  }
}

export function deleteCustomUnit(unitId: string): void {
  try {
    const units = getCustomUnits();
    const filtered = units.filter(u => u.id !== unitId);
    localStorage.setItem(CUSTOM_UNITS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error("Failed to delete custom unit", error);
  }
}
