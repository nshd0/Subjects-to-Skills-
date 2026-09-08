import { useState, useEffect, useCallback } from 'react';
import { Unit } from '@/types';
import { units as sampleUnits } from '@/data/units';
import { getCustomUnits, saveCustomUnit, updateCustomUnit, deleteCustomUnit } from './storage';

export function useUnitsForGrade(gradeId: string | null) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUnits = useCallback(() => {
    if (!gradeId) {
      setUnits([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    // Combine sample units and custom units
    const custom = getCustomUnits().filter(u => u.gradeId === gradeId);
    const samples = sampleUnits.filter(u => u.gradeId === gradeId);
    
    setUnits([...custom, ...samples]);
    setLoading(false);
  }, [gradeId]);

  useEffect(() => {
    fetchUnits();

    // Setup an event listener for custom events so we can re-render when a unit is saved
    const handleUnitsChanged = () => {
      fetchUnits();
    };
    
    window.addEventListener('planner_units_changed', handleUnitsChanged);
    return () => {
      window.removeEventListener('planner_units_changed', handleUnitsChanged);
    };
  }, [fetchUnits]);

  return { units, loading };
}

export function useCreateUnit() {
  return function createUnit(unit: Unit) {
    saveCustomUnit(unit);
    window.dispatchEvent(new Event('planner_units_changed'));
  };
}

export function useUpdateUnit() {
  return function updateUnit(unit: Unit) {
    updateCustomUnit(unit);
    window.dispatchEvent(new Event('planner_units_changed'));
  };
}

export function useDeleteUnit() {
  return function deleteUnit(unitId: string) {
    deleteCustomUnit(unitId);
    window.dispatchEvent(new Event('planner_units_changed'));
  };
}
